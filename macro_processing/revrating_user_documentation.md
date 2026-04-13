# RevRating Python Script — User Documentation

**For:** RDO staff running the review processor  
**Author:** Jay Guwalani  
**Last updated:** April 2026

---

## What This Script Does

After a limited submission competition closes in InfoReady and all reviewers have submitted their scores, you need to process that data into a formatted report. This script does that automatically.

It reads the raw review data exported from InfoReady, calculates scores, identifies reviewer bias, and produces a professionally formatted Excel workbook (called a "MacroResult") that's ready to share with leadership or archive.

**This replaces the old RevRating.xlsb Excel macro** that was Windows-only and required manually editing file paths in VBA code. The Python script works on Mac and Windows, auto-detects file formats, and produces identical output.

---

## When to Run This

Run this script after:
1. A competition has closed in InfoReady
2. All reviewers have submitted their scores
3. You've downloaded the Raw Review Data from InfoReady

---

## Step-by-Step Instructions

### Step 1: Download the Review Data from InfoReady

1. Go to **InfoReady** → **Manage** → select the competition
2. Click **Reports** (top menu)
3. Select **Raw Review Data** and click **Download Selected Reports**
4. Save the downloaded .xlsx file somewhere you can find it (Desktop works fine)

### Step 2: Open Terminal

- **Mac:** Press `Cmd + Space`, type "Terminal", press Enter
- **Windows:** Press `Win + R`, type "cmd", press Enter

### Step 3: Run the Script

Type the following, then drag the downloaded file into the Terminal window:

```bash
python3 rev_rating.py 
```

After dragging the file, your command will look something like:

```bash
python3 rev_rating.py "/Users/yourname/Desktop/Keck_Foundation_apps_2025.xlsx"
```

Press **Enter**. The script will run for a few seconds and tell you where the output was saved.

### Step 4: Upload the Output

The script creates a file called `MacroResult_YYYY-MM-DD_HH-MM.xlsx` in the same folder as your input file.

1. Go to the **Limited Submissions Shared Drive**
2. Navigate to: **FY folder** → **Sponsor folder** → **Program folder**
3. Upload the MacroResult file
4. Email Hana to let her know it's done, with a link to the folder

---

## What the Output Contains

The MacroResult workbook has 5 sheets:

### Sheet 1: Matrix Final
The main scoring sheet. Shows every reviewer's total score for every application in a matrix format.

**Columns include:**
- Each reviewer gets a column with their scores
- **Grand Total:** Sum of all reviewer scores for that application
- **Average:** Mean score across reviewers
- **Standard Deviation:** How much reviewers disagreed (high SD = controversial application)
- **Number of Reviews:** How many reviewers scored this application
- **Normalized Score:** Score adjusted for reviewer bias (the fairest ranking)

Applications are sorted by Normalized Score, highest first. This is the primary ranking.

**Red highlighting:** If the Standard Deviation exceeds 4, the cell is highlighted in light red — this flags applications where reviewers strongly disagreed.

### Sheet 2: Reviewer Summary
Per-reviewer metrics showing how each reviewer scored relative to the group.

- **Estimated Bias > 0:** This reviewer scored higher than average (more lenient)
- **Estimated Bias < 0:** This reviewer scored lower than average (stricter)

This helps identify if one reviewer is pulling scores up or down for all applications.

### Sheet 3: Matrix by Category and Applicant
Breaks down scores by rubric category (e.g., "Research Impact", "Feasibility", "Innovation"). Shows which categories each application scored well or poorly in.

Application summary rows are in **red bold**. Reviewer detail rows appear underneath each application.

### Sheet 4: Reviewer Administrator Comments
Internal admin-only comments organized by reviewer. These are comments visible only to administrators, not to applicants.

### Sheet 5: Reviewer Comments
Applicant-facing comments organized by application, then by reviewer. Each comment is prefixed with its rubric category label.

---

## First-Time Setup

You only need to do this once:

```bash
pip3 install openpyxl pyxlsb
```

This installs the libraries the script needs to read and write Excel files.

**To verify it worked:**
```bash
python3 -c "import openpyxl; print('Ready')"
```

If it prints "Ready", you're set.

---

## Troubleshooting

| Problem | What to Do |
|---------|-----------|
| "openpyxl not installed" | Run `pip3 install openpyxl pyxlsb` in Terminal |
| "Required columns not found" | The input file is missing Application, Reviewer, or Rating columns. Check that you downloaded "Raw Review Data", not a different report. |
| "No data found" | The Reviewer Details sheet is empty. Check that reviews have been submitted in InfoReady. |
| "No rubric categories found" | The competition doesn't use rubric categories. Sheets 1, 2, 4, and 5 will still generate normally. Sheet 3 will just say "No rubric categories found." |
| Output file not appearing | If the input folder is read-only (like a Google Drive stream), the script saves to your current working directory instead. Check the Terminal output for the exact path. |
| Script won't run at all | Make sure you have Python 3.8 or later. Check with: `python3 --version` |

---

## Technical Details (For Reference)

### Supported Input Formats
- `.xlsx` (recommended — standard InfoReady export)
- `.xlsb` (legacy macro-enabled binary format)
- `.csv` (fallback)

### How It Finds the Right Sheet
The script looks for a sheet named "Reviewer Details" (case-insensitive). If not found, it looks for any sheet containing "review" in the name, then defaults to the first sheet.

### Column Matching
The script uses flexible matching, so minor naming variations across different InfoReady competition types are handled automatically:

| What It Needs | Recognized Names |
|--------------|-----------------|
| Application | Application, Application Title, Proposal, Proposal Title |
| Reviewer | Reviewer, Reviewer Name, Panelist, Evaluator |
| Rating | Rating, Score, Numeric Rating, Numeric Score |
| Applicant | Applicant, Applicant Name, PI, PI Name |
| Comment Label | Comment Label, Label, Rubric Category, Criterion |
| Comments | Comments to Applicant, Reviewer Comments, Comments |
| Admin Comments | Administrator Comments, Admin Comments |

You do **not** need to delete extra columns from the export before running the script. It ignores columns it doesn't need.

### How Bias is Calculated
For each reviewer, the script computes: `mean(reviewer_score - proposal_average)` across all proposals they reviewed. A positive number means they score higher than the group on average; negative means lower.

### How Normalized Score Works
For each proposal: `mean(score - reviewer_bias)` across all reviewers. This adjusts for the fact that some reviewers are systematically lenient or strict, giving a fairer comparison.

---

## Comparison with the Old Excel Macro

| Feature | Old Macro (RevRating.xlsb) | Python Script (rev_rating.py) |
|---------|---------------------------|-------------------------------|
| Platform | Windows only | Mac and Windows |
| Setup | Edit VBA file paths manually | Just drag and drop |
| Speed | Slow on large files | Fast (seconds) |
| Input format | .xlsb only | .xlsx, .xlsb, .csv |
| Output | Same 5-sheet MacroResult | Same 5-sheet MacroResult |
| Accuracy | Verified match | Verified match |
| Maintenance | Requires VBA knowledge | Python (well-documented) |

Validation testing confirmed the Python script produces identical output to the VBA macro across all metrics: rankings, bias calculations, normalized scores, and conditional formatting.

---

## Questions?

Contact Jay Guwalani (jguwalan@umd.edu) or the Research Development Office at limitedsubmissions@umd.edu.
