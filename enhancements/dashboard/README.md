# Limited Submissions Tracking Dashboard

**Status:** POC (Proof of Concept)  
**Owner:** Jay Guwalani, GA  
**Stakeholder:** Hana Kabashi, Program Manager  
**Created:** April 2026

---

## Purpose

Replace the scattered Google Doc, spreadsheet, and reporting tracker with a single structured system for tracking limited submission competitions, applicants, nominees, and post-award outcomes.

---

## What's in This Folder

| File | What It Is |
|------|-----------|
| `LS_POC_Master_Schema.xlsx` | The POC workbook with 8 tabs: Overview, Schema Definition (24 fields), Master Table (sample data), FY26 View, Nominees Export, Dashboard Summary, Form Structure, Apps Script Reference |
| `RDO_Dashboard.html` | Full merged dashboard: auth, data entry, reporting charts, Pines report, deadlines, nominees export. Double-click to run locally. |
| `LS_Dashboard_Maintenance_Plan.docx` | Roles, update cadences, data quality checks, schema change process, handoff procedure |
| `CHANGELOG.md` | Running log of every schema change |
| `apps_script/onFormSubmit.gs` | Generates Competition_ID and Record_ID on form submission |
| `apps_script/onEdit.gs` | Timestamps the Last_Updated column on any edit |

---

## Key Design Decisions

These were set in Hana's April 2, 2026 feedback:

1. **Limited submissions only** — internal programs (ISRCA, Catalyst, seed grants) deferred to a separate phase with its own structure
2. **No reviewer data** — reviewer assignments, scores, comments, and materials are excluded entirely
3. **Competition_ID** links multiple applicants to a single opportunity (e.g., 3 faculty competing for 1 Pepper Centers slot all share `LS-FY26-001`)
4. **Max_Nominations** captures how many slots UMD has per competition

---

## Schema Summary (24 Fields)

| Section | Fields | Purpose |
|---------|--------|---------|
| Competition Identity (A–H) | Competition_ID, Opportunity_Name, Sponsor, Sponsor_Deadline, Internal_Deadline, Max_Nominations, Fiscal_Year, InfoReady_Link | Links opportunity to sponsor and deadlines |
| Applicant Record (I–M) | Record_ID, Applicant_Name, College, Department, Email | One row per applicant per competition |
| Competition Outcome (N–P) | Internal_Status, Selected_as_Nominee, Selection_Date | Internal selection result |
| Sponsor Outcome (Q–T) | Sponsor_Submission_Status, Award_Amount, Award_Start_Date, Award_End_Date | What happened after nomination |
| Reporting & Tracking (U–X) | Progress_Report_Due, Progress_Report_Status, Notes, Last_Updated | Post-award follow-up |

Full field definitions with data types, validation rules, and dropdown values are in the Schema Definition tab of the Excel workbook.

---

## Migrating to Google Sheets

1. Create a new Google Sheet
2. Copy the Master Table headers and sample data from the Excel workbook
3. Set up data validations (dropdowns) per the Schema Definition tab
4. Create the Google Form per the Form Structure tab
5. Open **Extensions → Apps Script**, paste the code from `apps_script/onFormSubmit.gs` and `apps_script/onEdit.gs`
6. Set up triggers: `onFormSubmit` → on form submit; `onEdit` → on edit
7. Test by submitting a record through the form
8. Create FY tabs using the FILTER formula from the FY26 View tab
9. Create the Nominees Export view using the QUERY formula
10. Apply conditional formatting per the Master Table's color rules

---

## Updating the Apps Script

If you modify the Apps Script in Google Sheets, always back up the updated code here:

1. Copy the code from **Extensions → Apps Script** in Google Sheets
2. Paste into the corresponding `.gs` file in this folder
3. Commit to the repo with a descriptive message
4. Update `CHANGELOG.md` with what changed and why
