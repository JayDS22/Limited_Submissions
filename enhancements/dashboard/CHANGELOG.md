# Dashboard Changelog

All notable changes to the schema, dashboard structure, and automation scripts.

Format: `[Date] — [Change Type] — Description`

---

## April 2026

### 2026-04-09 — Initial POC
- **Schema:** Created 24-field schema across 5 sections (Competition Identity, Applicant Record, Competition Outcome, Sponsor Outcome, Reporting & Tracking)
- **Structure:** Competition_ID ties multiple applicants to single opportunity; Record_ID appends applicant sequence
- **Scope:** Limited submissions only (per Hana's April 2 feedback). Internal programs deferred to separate phase.
- **Exclusion:** All reviewer data excluded from dashboard
- **Sample data:** 10 records across 5 competitions (Pepper Centers, Japan Foundation IPS, EHSCC, AI Collaboratory, Keck)
- **Automation:** onFormSubmit.gs (auto-ID generation), onEdit.gs (auto-timestamp)
- **Views:** FY26 tab (FILTER), Nominees Export (QUERY), Dashboard Summary (KPIs)
- **Docs:** Maintenance Plan created, Repository Structure Guide updated

---

## Template for Future Entries

```
### YYYY-MM-DD — [Added | Changed | Removed | Fixed]
- **What:** Description of change
- **Why:** Reason / who requested it
- **Impact:** What views, formulas, or scripts were affected
- **Approved by:** [Name]
```
