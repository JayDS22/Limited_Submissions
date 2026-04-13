/**
 * onEdit — Auto-timestamps Last_Updated column on any row edit
 * 
 * Trigger: Set as "On edit" in Apps Script Triggers
 * 
 * Only fires on the 'Master Table' sheet.
 * Skips header rows (row 1 = section headers, row 2 = column headers).
 * Column X (24) = Last_Updated
 * 
 * Also auto-calculates Progress_Report_Due (Column U) when
 * Award_Start_Date (Column S) is entered for a nominee.
 * 
 * Last updated: 2026-04-09
 * Backed up from Google Sheets Apps Script Editor
 */

function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  
  // Only act on the Master Table sheet
  if (sheet.getName() !== 'Master Table') return;
  
  var row = e.range.getRow();
  var col = e.range.getColumn();
  
  // Skip header rows (row 1 = section labels, row 2 = column headers)
  if (row < 3) return;
  
  // Update Last_Updated timestamp (Column X = 24)
  sheet.getRange(row, 24).setValue(new Date());
  
  // If Award_Start_Date (Column S = 19) was edited, calculate Progress_Report_Due
  if (col === 19) {
    var awardStart = sheet.getRange(row, 19).getValue();
    var isNominee = sheet.getRange(row, 15).getValue(); // Column O = Selected_as_Nominee
    
    if (awardStart && isNominee === 'Yes') {
      var dueDate = new Date(awardStart);
      dueDate.setMonth(dueDate.getMonth() + 6);
      
      // Set Progress_Report_Due (Column U = 21)
      sheet.getRange(row, 21).setValue(dueDate);
      
      // Set Progress_Report_Status to "Not Due" if currently "N/A"
      var currentStatus = sheet.getRange(row, 22).getValue();
      if (currentStatus === 'N/A' || !currentStatus) {
        sheet.getRange(row, 22).setValue('Not Due');
      }
    }
  }
  
  // If Selected_as_Nominee (Column O = 15) changed to "Yes", 
  // check if Award_Start already exists and recalculate
  if (col === 15 && e.value === 'Yes') {
    var awardStart = sheet.getRange(row, 19).getValue();
    if (awardStart) {
      var dueDate = new Date(awardStart);
      dueDate.setMonth(dueDate.getMonth() + 6);
      sheet.getRange(row, 21).setValue(dueDate);
      
      var currentStatus = sheet.getRange(row, 22).getValue();
      if (currentStatus === 'N/A' || !currentStatus) {
        sheet.getRange(row, 22).setValue('Not Due');
      }
    }
  }
}
