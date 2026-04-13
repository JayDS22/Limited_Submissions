# Limited Submissions

Internal tools and documentation for managing limited submission funding opportunities at the University of Maryland's Research Development Office (RDO), Division of Research.

Limited submissions are funding opportunities where the sponsor restricts the number of applications a single institution can submit. When these come in, UMD needs to run an internal competition to decide who gets the institutional nomination. This repo holds the processes, analysis frameworks, automation scripts, and workflow guides that make that happen.

---

## What's in this repo

```
Limited_Submissions/
|
|-- limited_submission_processes/
|   |-- Limited_Submissions_Strategy.md
|   |-- Limited_Submissions_Strategy_2_Indepth.md
|   |-- Limited_Submission_Analysis_Sep10to16_2025.md
|
|-- macro_processing/
|   |-- rev_rating.py
|   |-- README.md
|
|-- workflow_optimization/
|   |-- Progress_Reports_Quick_Start_Guide.md
|   |-- Progress_Reports_Reference_Manual.md
```

### limited_submission_processes/

This is the core of the operation. Contains the methodology we use to evaluate Smartsmailer funding alerts and determine which opportunities are limited submissions.

- **Limited_Submissions_Strategy.md** defines every column in our analysis spreadsheet, explains how we populate each one, and walks through real examples (Pepper Centers, Japan Foundation IPS, NSF Physics, etc.).

- **Limited_Submissions_Strategy_2_Indepth.md** is the full 4-step identification framework:
  1. Initial screening (audience, geography, institutional eligibility)
  2. Deep research (solicitation language, university limited submission pages, grant mechanism patterns)
  3. Evidence classification (confirmed / unclear / no evidence)
  4. Cross-verification and documentation

- **Limited_Submission_Analysis_Sep10to16_2025.md** is a worked example showing analysis output for 21 opportunities from two Smartsmailer alerts, including the summary table and final recommendations.

### macro_processing/

A Python replacement for the legacy RevRatingUMD VBA macro that processes InfoReady reviewer scores.

- **rev_rating.py** reads any InfoReady Application Reviews export (.xlsx, .xlsb, or .csv) and produces a formatted MacroResult workbook with five sheets: score matrix, reviewer summary with bias estimates, category breakdowns, admin comments, and reviewer comments. Works cross-platform (no Windows/Excel dependency).

- **README.md** covers installation, usage, column matching logic, output structure, and a full mapping of VBA logic to Python equivalents. Includes validation results showing exact match with the original macro output.

Requirements: Python 3.8+, openpyxl, pyxlsb (optional, only for .xlsb input).

```
pip3 install openpyxl pyxlsb
python3 rev_rating.py "Application Reviews Export.xlsx"
```

### workflow_optimization/

Guides for extending InfoReady beyond pre-award tracking into post-award outcome reporting.

- **Progress_Reports_Quick_Start_Guide.md** covers setup in 30 minutes: enabling progress reports, building forms (simple 5-field and comprehensive 12-field templates), setting automated reminders, and integrating with the existing Google Sheets/Calendar workflow. Includes a full NSF ART implementation example.

- **Progress_Reports_Reference_Manual.md** is the deep reference for advanced form configuration, conditional logic, data export procedures, SOPs for processing and follow-up, quarterly reporting templates, scaling strategy, and troubleshooting.

---

## How we use this

The typical weekly workflow looks like this:

1. **Monday**: Smartsmailer email arrives with new funding opportunities.
2. **Analysis**: Each opportunity gets screened through the 4-step framework. We web-search solicitations and peer university limited submission pages to confirm or rule out institutional limits.
3. **Output**: Results go into the Limited Submissions Analysis spreadsheet (16 columns, color-coded by status).
4. **Posting**: Confirmed limited submissions get drafted as competitions in InfoReady, with all relevant documents attached.
5. **Tracking**: Deadlines go into the UMD Limited Submissions Calendar (Google Sheets) and the Limited Submissions Google Calendar.
6. **Post-deadline**: After competitions close, rev_rating.py processes reviewer scores and generates formatted results.

The strategy docs and analysis examples in this repo document the "how" and "why" behind each step so the process is repeatable regardless of who's running it.

---

## Related tools (not in this repo)

- **InfoReady** (umd.infoready4.com): Where competitions get posted and managed
- **UMD Limited Submissions Calendar**: Public-facing Google Sheet tracking all active competitions
- **Shared Drive**: FY-organized storage for solicitation documents, guidelines, and competition materials
- **Smartsmailer/SPIN**: The funding alert service that feeds our weekly analysis pipeline

---

## Context

This repo supports the Graduate Assistant role in the Research Development Office. The onboarding guide, analysis templates, and automation scripts were built to make the limited submissions workflow transferable, so a new GA can pick up the process without starting from scratch.

For questions, reach out to the Research Development Office at limitedsubmissions@umd.edu.
