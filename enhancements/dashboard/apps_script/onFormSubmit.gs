/**
 * onFormSubmit — Auto-generates Competition_ID and Record_ID
 * 
 * Trigger: Set as "On form submit" in Apps Script Triggers
 * 
 * Competition_ID format: LS-FY26-001 (unique per opportunity)
 * Record_ID format: LS-FY26-001-A01 (unique per applicant within competition)
 * Fiscal_Year: Derived from Sponsor_Deadline (Jul-Jun = next FY)
 * 
 * Last updated: 2026-04-09
 * Backed up from Google Sheets Apps Script Editor
 */

function onFormSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('Master Table');
  var lastRow = sheet.getLastRow();
  
  // Column D = Sponsor_Deadline
  var deadline = sheet.getRange(lastRow, 4).getValue();
  
  // Determine fiscal year from sponsor deadline
  // Month >= 6 (July onwards) = next fiscal year
  var fy = deadline.getMonth() >= 6
    ? 'FY' + (deadline.getFullYear() + 1).toString().slice(-2)
    : 'FY' + deadline.getFullYear().toString().slice(-2);
  
  // Count existing unique Competition_IDs this FY
  var allIDs = sheet.getRange('A2:A' + lastRow)
    .getValues().flat().filter(String);
  var fyIDs = allIDs.filter(function(id) {
    return id.startsWith('LS-' + fy);
  });
  var uniqueComps = [];
  fyIDs.forEach(function(id) {
    if (uniqueComps.indexOf(id) === -1) uniqueComps.push(id);
  });
  
  // Check if this opportunity already exists (match on Opportunity_Name + Sponsor)
  var oppName = sheet.getRange(lastRow, 2).getValue(); // Column B
  var sponsor = sheet.getRange(lastRow, 3).getValue(); // Column C
  var compID = '';
  
  for (var i = 2; i < lastRow; i++) {
    if (sheet.getRange(i, 2).getValue() === oppName && 
        sheet.getRange(i, 3).getValue() === sponsor) {
      compID = sheet.getRange(i, 1).getValue();
      break;
    }
  }
  
  // If no existing competition found, generate new ID
  if (!compID) {
    var compNum = (uniqueComps.length + 1).toString().padStart(3, '0');
    compID = 'LS-' + fy + '-' + compNum;
  }
  
  // Set Competition_ID (Column A)
  sheet.getRange(lastRow, 1).setValue(compID);
  
  // Generate Record_ID: count existing records with same Competition_ID
  var sameComp = allIDs.filter(function(id) {
    return id === compID;
  }).length;
  var recID = compID + '-A' + (sameComp + 1).toString().padStart(2, '0');
  
  // Set Record_ID (Column I)
  sheet.getRange(lastRow, 9).setValue(recID);
  
  // Set Fiscal_Year (Column G)
  sheet.getRange(lastRow, 7).setValue(fy);
  
  // Set Last_Updated (Column X)
  sheet.getRange(lastRow, 24).setValue(new Date());
  
  // Set default Internal_Status (Column N)
  if (!sheet.getRange(lastRow, 14).getValue()) {
    sheet.getRange(lastRow, 14).setValue('Received');
  }
  
  // Set default Selected_as_Nominee (Column O)
  if (!sheet.getRange(lastRow, 15).getValue()) {
    sheet.getRange(lastRow, 15).setValue('No');
  }
  
  // Set default Progress_Report_Status (Column V)
  if (!sheet.getRange(lastRow, 22).getValue()) {
    sheet.getRange(lastRow, 22).setValue('N/A');
  }
}
