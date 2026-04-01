# InfoReady Progress Reports: Reference Manual
## Technical Configuration & Advanced Features

---

## Purpose of This Document

This manual provides **detailed technical guidance** for:
- Advanced form configuration options
- Troubleshooting specific issues
- Data management and export procedures
- Annual evaluation and scaling strategies
- Standard Operating Procedures (SOPs)

**Use the Quick Start Guide for:** Initial setup and daily operations  
**Use this Reference Manual for:** Technical details and edge cases

---

## Section 1: Advanced Form Configuration

### Conditional Logic & Field Dependencies

**Use Case:** Show "Award Details" section only if awardee answers "Yes" to "Received funding?"

**Configuration:**
1. Create parent field: "Have you received funding?" (Yes/No)
2. Create conditional section: "Award Details"
3. In section settings → Set display condition: "Show if 'Received funding' = Yes"
4. Add fields (award amount, dates, etc.) within conditional section

**Best Practices:**
- Keep conditional logic simple (1-2 levels max)
- Always test as end-user before publishing
- Document conditional relationships in form instructions

### Custom Field Types

**Rich Text Fields:**
- Use for: Project descriptions, narrative updates
- Character limit: 2000 recommended (prevents overload)
- Enable formatting toolbar: Bold, italics, bullets only

**File Upload Fields:**
- Use for: Publications, reports, supporting documents
- File size limit: 10MB default
- Accepted formats: PDF, DOCX, XLSX, PPT recommended
- Label clearly: "Optional: Upload key publication or report"

**Multiple Choice with "Other":**
- Use for: Categories where options may be incomplete
- Example: "Type of Support: Grant / Cooperative Agreement / Contract / Other (please specify)"
- Always include "Other" for flexibility

### Field Validation Rules

**Number Fields:**
- Set minimum value: 0 (prevents negative numbers)
- Set maximum value: Only if logical cap exists
- Example: "Number of publications" → Min: 0, Max: None

**Currency Fields:**
- Automatically formats with $ and commas
- Defaults to USD
- Validation: Requires numeric input

**Date Fields:**
- Use Date Range for funding periods (Start/End)
- Use Single Date for milestones
- Validation: Can set "must be in past" or "must be in future"

### Section Organization Best Practices

**Recommended Structure:**
1. **Funding Status** (4-6 fields) - Always first
2. **Progress/Milestones** (3-5 fields) - Conditional on "Awarded"
3. **Outputs** (3-4 fields) - Optional
4. **Compliance** (2-3 fields) - Program-specific
5. **Support/Feedback** (2 fields) - Always last

**Naming Convention:**
- Section titles: Clear nouns ("Funding Status" not "Status")
- Field labels: Action-oriented questions ("Have you received funding?" not "Funding?")
- Notes to awardee: Brief context (1 sentence max)

---

## Section 2: Data Management & Export

### Export Options Comparison

**CSV Export:**
- **Use for:** Data analysis, spreadsheets, metrics tracking
- **Path:** Reports → Applications/Reviews → Select Competition → Check "Include Progress Reports" → Export CSV
- **Format:** One row per awardee, columns for each field
- **Best for:** Aggregating data across multiple competitions

**PDF Export:**
- **Use for:** Archiving, sharing with leadership, records
- **Path:** Progress Reports → View Submission → Export PDF
- **Format:** Formatted report per awardee (one PDF per submission)
- **Best for:** Individual report review, permanent records

**Direct View:**
- **Use for:** Quick checks, real-time monitoring
- **Path:** Progress Reports → View Submissions
- **Format:** On-screen display, scrollable
- **Best for:** Daily monitoring, immediate follow-up

### File Naming Conventions

**For PDF Archives:**
```
[Program_Abbreviation]_[Awardee_LastName]_ProgressReport_[YYYYMMDD].pdf

Examples:
NSF_ART_Smith_ProgressReport_20250430.pdf
NIH_RM1_Johnson_ProgressReport_20251015.pdf
```

**For CSV Exports:**
```
[Program_Abbreviation]_ProgressReports_[FY]_[Export_Date].csv

Examples:
NSF_ART_ProgressReports_FY2025_20250630.csv
AllCompetitions_ProgressReports_Q2FY25_20250401.csv
```

### Shared Drive Organization

**Recommended folder structure:**
```
Limited Submissions/
├── FY2025/
│   ├── NSF/
│   │   ├── ART/
│   │   │   ├── Solicitation_Documents/
│   │   │   ├── Internal_Applications/
│   │   │   └── Post-Award_Reports/           ← Progress Reports here
│   │   │       ├── NSF_ART_Smith_ProgressReport_20250430.pdf
│   │   │       └── NSF_ART_ProgressReports_FY2025_20250630.csv
```

### Data Retention Policy

**Minimum retention:** 5 years per university policy

**Storage locations:**
1. **InfoReady (primary):** Indefinite (until competition archived)
2. **Shared Drive (archive):** 7 years
3. **Google Sheets (summary):** 7 years
4. **Quarterly reports:** Permanent (institutional record)

---

## Section 3: Standard Operating Procedures

### SOP 1: Enabling Progress Reports for New Competition

**Frequency:** Per competition, as awarded  
**Time:** 30 minutes  
**Responsible:** Graduate Assistant

**Steps:**
1. Verify competition closed and awardee assigned
2. Navigate to InfoReady → Manage → Competition → Progress Reports
3. Uncheck "Progress Report(s) are not needed"
4. Configure using appropriate template (Simple/Standard/Comprehensive)
5. Set due date: 6 months post-selection (or per program requirements)
6. Add 3 automated reminders: 30/7/1 days before
7. Save and publish
8. Test by viewing as awardee role
9. Update Google Sheets tracker: Add "Progress Report Due" date
10. Create Google Calendar event with reminders
11. Email awardee with heads-up (use template from Quick Start Guide)

**Quality Check:**
- [ ] All required fields marked with asterisk
- [ ] Instructions box completed
- [ ] Notifications scheduled
- [ ] Trackers updated
- [ ] Awardee notified

**Escalation:** Review with supervisor before publishing if:
- Award value > $2M
- New program type (no template exists)
- Unusual compliance requirements

---

### SOP 2: Processing Submitted Progress Reports

**Frequency:** As submitted  
**Time:** 20 minutes per report  
**Responsible:** Graduate Assistant

**Steps:**

**Phase 1: Initial Review (5 minutes)**
1. Receive InfoReady notification email
2. Log into InfoReady → Progress Reports → View Submission
3. Read all responses
4. Flag incomplete sections or unclear answers

**Phase 2: Data Recording (5 minutes)**
5. Open Google Sheets tracker
6. Update row for this competition:
   - Report Status → "Submitted"
   - Submission Date → [Date]
   - Funding Outcome → Awarded/Declined/Pending
   - External $ Amount → [If awarded]
   - Notes → Key takeaways or flags

**Phase 3: Archive (5 minutes)**
7. Export report as PDF from InfoReady
8. Save to Shared Drive: `[FY]/[Sponsor]/[Program]/Post-Award Reports/`
9. Use naming convention: `[Program]_[LastName]_ProgressReport_[YYYYMMDD].pdf`

**Phase 4: Follow-Up (5 minutes)**
10. If support requested → Forward to supervisor with context
11. If success story → Email awardee requesting permission to publicize
12. If challenges noted → Add to weekly meeting agenda
13. Send thank-you email to awardee (template in Quick Start Guide)

**Weekly Summary:**
14. Add to weekly supervisor meeting report:
    - Report title and awardee name
    - Funding outcome and amount
    - Key highlights or concerns

**Quality Check:**
- [ ] Google Sheets updated
- [ ] PDF archived to Shared Drive
- [ ] Awardee acknowledged
- [ ] Follow-up actions assigned
- [ ] Weekly report updated

**Escalation:** Notify supervisor immediately if:
- Awardee reports significant problems with internal process
- Award > $1M received (celebrate!)
- Compliance issue flagged
- Sensitive content (disputes, ethics concerns)

---

### SOP 3: Following Up on Overdue Reports

**Trigger:** Due date + 7 days, no submission  
**Time:** 15 minutes per awardee  
**Responsible:** Graduate Assistant

**Steps:**

**First Follow-Up (Due + 7 days)**
1. Check InfoReady submission status to confirm not submitted
2. Check spam/email issues aren't blocking notifications
3. Send personalized follow-up email (template in Quick Start Guide)
4. Log follow-up in Google Sheets: "Last Contact" column → [Date]
5. Set calendar reminder for 2-week check-in

**Second Follow-Up (Due + 21 days)**
6. If still no response, send second reminder with phone offer:
   ```
   Subject: [Competition Name] Progress Report - Can I Help?
   
   Dear Dr. [LastName],
   
   I'm following up once more on the progress report for [Competition].
   
   If completing the online form is challenging, I'm happy to collect 
   the information via a brief phone call (10 minutes). 
   
   Would that be helpful? Let me know a good time to call.
   
   Best regards,
   [Your Name]
   [Phone Number]
   ```
7. Log second follow-up in Google Sheets
8. Set calendar reminder for 1-week check-in

**Escalation (Due + 28 days)**
9. If no response after 2 follow-ups, notify supervisor
10. Supervisor decides: Additional follow-up vs. close as "No Response"
11. Document outcome in Google Sheets: Notes column

**Special Cases:**
- **High-value awards (>$1M):** Escalate to supervisor at Due + 14 days
- **Multi-year awards:** More persistent (up to 3 follow-ups over 2 months)
- **Faculty on sabbatical:** Coordinate with department to find coverage

**Quality Check:**
- [ ] At least 2 follow-up attempts documented
- [ ] Escalated to supervisor after 28 days
- [ ] Outcome recorded in tracker
- [ ] Lessons learned noted for future

---

### SOP 4: Quarterly Metrics Reporting

**Frequency:** Quarterly (Last week of quarter)  
**Time:** 2 hours  
**Responsible:** Graduate Assistant  
**Reviewed By:** RDO Supervisor

**Steps:**

**Week 1 of Final Month:**
1. Review all Progress Reports submitted during quarter
2. Export CSV for all competitions with Progress Reports
3. Create summary spreadsheet with tabs:
   - Overview (aggregate metrics)
   - By Competition (individual program details)
   - Success Stories (with permission)
   - Support Requests (categorized)

**Data to Collect:**
- Total competitions with Progress Reports enabled
- Total reports submitted vs. expected
- Response rate percentage
- Funding outcomes (# awarded, # declined, # pending)
- Total external funding secured ($)
- Most common support requests
- Notable success stories (with permission)

**Week 2-3:**
4. Draft quarterly report using template:

```
**Progress Reports Quarterly Update - Q[X] FY[YYYY]**

**Summary:**
• Active competitions with Progress Reports: [#]
• Reports submitted this quarter: [#] ([%] response rate)
• Nominees receiving sponsor funding: [#] ([%] success rate)
• Total external funding secured: $[amount]

**Top Success Stories:**
1. [Awardee Name], [Program]: $[amount] from [Sponsor]
2. [Awardee Name], [Program]: $[amount] from [Sponsor]
3. [Awardee Name], [Program]: $[amount] from [Sponsor]

**Support Requests by Category:**
• Follow-on funding opportunities: [#]
• Collaboration identification: [#]
• Communications support: [#]
• Budget/compliance guidance: [#]

**Challenges & Trends:**
• [Observation 1 from awardee feedback]
• [Observation 2]

**Process Improvements:**
• [Recommendation 1 based on data]
• [Recommendation 2]

**Attachments:**
• Detailed metrics spreadsheet
• Success story examples (with permission)
```

**Week 4:**
5. Review draft with supervisor
6. Incorporate feedback
7. Finalize and submit to RDO leadership
8. Archive quarterly report to Shared Drive: `Limited_Submissions/Reports/Quarterly/`

**Quality Check:**
- [ ] All data accurate and sourced from InfoReady exports
- [ ] Success stories have permission to share
- [ ] Recommendations are actionable
- [ ] Supervisor review complete
- [ ] Report archived

---

## Section 4: Troubleshooting Guide

### Issue: Awardee Cannot Access Progress Report

**Symptoms:**
- "Link doesn't work"
- "Page not found"
- "No permission to view"

**Diagnosis:**
1. Verify awardee is correctly assigned in InfoReady competition
2. Check their email address is current and correct
3. Confirm Progress Report is published (not draft)
4. Check competition status (must be Active or Closed, not Archived)

**Solutions:**

**Solution A: Resend Notification**
```
Progress Reports → Select Report → Notify Participants → Select Awardee → Send
```

**Solution B: Provide Direct URL**
```
Copy URL from your admin view → Send in personal email
```

**Solution C: Recreate Assignment**
```
Manage → Competition → Routing Steps → Re-assign awardee → Republish
```

**Prevention:**
- Always test links before due date
- Confirm email addresses at selection time
- Send heads-up email with instructions

---

### Issue: Progress Report Not Appearing in Admin View

**Symptoms:**
- Tab visible but no reports listed
- "No Progress Reports configured" message

**Diagnosis:**
1. Check "Progress Report(s) are not needed" is unchecked
2. Verify report has been published (Save vs. Publish button)
3. Confirm browser cache isn't showing old version

**Solutions:**

**Solution A: Re-publish Report**
```
Progress Reports → Edit → Save → Publish
```

**Solution B: Clear Browser Cache**
```
Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

**Solution C: Check Different Browser**
```
Try Chrome, Firefox, or Edge to isolate browser-specific issues
```

**Prevention:**
- Always click "Publish" not just "Save"
- Use Incognito/Private browsing for testing

---

### Issue: Low Response Rates (<50%)

**Symptoms:**
- Multiple awardees not submitting
- Reports frequently overdue

**Diagnosis:**
1. Review form length: Is it too long? (>15 fields = too many)
2. Check instructions: Are they clear about time commitment?
3. Evaluate timing: Is due date during busy season?
4. Assess value proposition: Do awardees understand why?

**Solutions:**

**Solution A: Shorten Form**
```
Remove optional fields
Consolidate related questions
Use multiple choice over text boxes
Target: <10 fields, <10 minutes
```

**Solution B: Improve Communication**
```
Subject lines emphasize "10 minutes"
Instructions highlight benefits to awardee
Personal phone calls for high-value awards
Offer to complete via interview
```

**Solution C: Adjust Timing**
```
Avoid May (end of semester) and December (holidays)
Extend deadlines if systemic issue
Consider 9-month follow-up instead of 6-month
```

**Solution D: Incentivize (If Allowed)**
```
Acknowledge in annual report
Feature success stories on website
Offer professional development resources
```

**Prevention:**
- Pilot test with friendly faculty before wide deployment
- Survey awardees: "How can we improve this process?"
- Monitor response rates monthly and adjust proactively

---

### Issue: Incomplete or Unclear Responses

**Symptoms:**
- Fields left blank when should be completed
- Vague or minimal responses
- "N/A" in multiple fields

**Diagnosis:**
1. Too many required fields? Awardees rush through
2. Questions unclear or ambiguous?
3. Awardees don't have information readily available?

**Solutions:**

**Solution A: Reduce Required Fields**
```
Only mark truly critical fields as required:
✓ Did you receive funding? (Yes/No)
✓ If yes: Award amount

Optional everything else
```

**Solution B: Improve Field Labels**
```
Bad:  "Status"
Good: "What is the current status of your proposal?"

Bad:  "Comments"
Good: "Is there any additional information we should know? (Optional)"
```

**Solution C: Add Helpful Notes**
```
Field: "Direct Funding Amount"
Note to Awardee: "Enter total direct costs only, excluding indirect costs"
```

**Solution D: Personal Follow-Up**
```
Email: "Thank you for your report! Quick clarification: [Question]"
Phone call for high-value awards with unclear responses
```

**Prevention:**
- Test form with colleague before launch
- Provide examples in instructions
- Keep optional fields truly optional

---

### Issue: Data Export Errors

**Symptoms:**
- CSV file won't download
- PDF export incomplete
- Missing fields in export

**Diagnosis:**
1. Browser compatibility issue?
2. Too much data to export at once?
3. Special characters causing formatting errors?

**Solutions:**

**Solution A: Try Different Browser**
```
Chrome recommended for InfoReady exports
Clear cache before attempting
```

**Solution B: Export in Smaller Batches**
```
Instead of "All Competitions" → Select individual competition
Instead of "All Time" → Filter by date range
```

**Solution C: Contact InfoReady Support**
```
Email: support@infoready4.com
Include: Screenshot, competition name, export attempt details
Response time: Usually 24-48 hours
```

**Workaround:**
```
Manual export: Copy/paste individual reports into spreadsheet
Screenshot reports for immediate needs
```

**Prevention:**
- Test export capability immediately after setup
- Regularly export data (don't wait until year-end)
- Save backup exports monthly

---

## Section 5: Annual Evaluation Framework

### 12-Month Review Questions

**Data Quality Assessment:**
- Are responses providing actionable insights?
- What percentage of fields are being left blank?
- Are success stories compelling and specific?
- Do we need to add, remove, or modify fields?

**Process Efficiency Assessment:**
- Is current workflow sustainable with staffing?
- Are automated reminders effective?
- Is the follow-up process working?
- What's taking the most time?

**Impact Assessment:**
- Have we improved institutional reporting capacity?
- Have we identified process improvements?
- Have faculty relationships strengthened?
- Are we collecting compelling success stories?

**ROI Assessment:**
- Time invested vs. value gained
- Cost-benefit of continuing program
- Should we expand, maintain, or scale back?

### Annual Reporting Template

```
**Progress Reports Program - Annual Review FY[YYYY]**

**Program Summary:**
• Competitions with Progress Reports: [#]
• Total reports collected: [#]
• Overall response rate: [%]
• External funding tracked: $[total]

**Year-over-Year Comparison:**
• FY[Previous]: [#] reports, [%] response, $[funding]
• FY[Current]: [#] reports, [%] response, $[funding]
• Change: [+/-#] reports ([+/-%]), [+/-$] funding

**Top Achievements:**
1. [Institutional accomplishment enabled by data]
2. [Process improvement implemented]
3. [Faculty support success story]

**Challenges:**
1. [Challenge 1 and mitigation]
2. [Challenge 2 and mitigation]

**Lessons Learned:**
• [Lesson 1]
• [Lesson 2]
• [Lesson 3]

**Recommendations for Next Year:**
1. [Recommendation 1]: [Rationale]
2. [Recommendation 2]: [Rationale]
3. [Recommendation 3]: [Rationale]

**Appendices:**
• Detailed metrics spreadsheet
• Sample reports (anonymized)
• Quarterly reports (4)
• Template updates implemented
```

---

## Section 6: Scaling Strategy

### Template Library Maintenance

**As you expand, maintain templates for:**

**1. STEM Research Programs** (NSF, DOE, NIH)
- Focus: Publications, data, collaborations
- Sections: Funding Status (5 fields) + Research Progress (4 fields) + Outputs (4 fields)
- Due: 6 months post-selection

**2. Education/Training Programs** (NSF Fellowships, CAREER)
- Focus: Student outcomes, curriculum
- Sections: Funding Status (5 fields) + Student Success (4 fields) + Broader Impacts (3 fields)
- Due: 12 months post-selection

**3. Infrastructure Programs** (MRI, Core Facilities)
- Focus: Equipment acquisition, usage metrics
- Sections: Funding Status (5 fields) + Equipment Status (3 fields) + User Statistics (4 fields)
- Due: 12 months post-award

**4. Center/Institute Programs** (Large centers)
- Focus: Team building, partnerships
- Sections: Funding (5 fields) + Partnerships (3 fields) + Events (2 fields) + Publications (3 fields)
- Due: Annually for duration

**Save templates in:** Shared Drive → Limited_Submissions → Progress_Report_Templates/

**Naming convention:** `ProgressReport_Template_[Type]_v[#].docx`

### Multi-Competition Management

**When managing 10+ competitions with Progress Reports:**

**Create Master Tracking Dashboard:**
```
Google Sheets with tabs:
• Overview (all competitions summary)
• Active Reports (due dates, status)
• Overdue Follow-Ups (action items)
• Quarterly Metrics (auto-calculated)
• Annual Summary (trend analysis)
```

**Use Calendar Color-Coding:**
```
🟢 Progress Report Due - Submitted
🟡 Progress Report Due - Approaching (7 days)
🔴 Progress Report Due - Overdue
⚫ Progress Report Due - Closed (no response)
```

**Batch Processing Days:**
```
Monday: Process all weekend submissions (1-2 hours)
Wednesday: Send all weekly reminders (30 minutes)
Friday: Update master dashboard (30 minutes)
```

### Delegation and Training

**When volume exceeds capacity:**

**Document core processes:**
- Standard field templates
- Email response templates
- Export and archive procedures
- Escalation criteria

**Train backup person:**
- Another GA or staff member
- Shadow for 2 weeks
- Independent practice with review
- Assign specific competitions

**Create quick reference sheet:**
- 1-page cheat sheet with key steps
- Common issues and fixes
- Contact info for escalation

---

## Section 7: Advanced Features

### Automated Workflows (Future Enhancement)

**InfoReady may support in future versions:**
- Auto-assignment based on rules
- Conditional email content
- Integration with external databases
- API access for custom reporting

**Monitor:** InfoReady release notes and webinars for updates

### Integration with Other Systems

**Current manual integrations:**
- Google Sheets (manual updates)
- Google Calendar (manual event creation)
- Shared Drive (manual file uploads)

**Potential future integrations:**
- Award management systems
- Faculty profile databases
- Institutional reporting tools

**Recommendation:** Advocate for institutional license of InfoReady API access

### Benchmarking Against Peer Institutions

**To assess program effectiveness:**

**Annual survey questions for peer institutions:**
- Do you track post-award outcomes for limited submissions?
- What system do you use?
- What's your response rate?
- What's your funding success rate?
- How do you use the data?

**Peer institutions to contact:**
- University of Michigan
- Penn State University
- University of Wisconsin-Madison
- Ohio State University
- University of Washington

**Share best practices at conferences:**
- NORDP (National Organization of Research Development Professionals)
- SRAI (Society of Research Administrators International)
- NCURA (National Council of University Research Administrators)

---

## Appendix: Contact Information & Resources

### InfoReady Support

**Technical Support:**
- Email: support@infoready4.com
- Phone: Check InfoReady platform footer
- Help Center: https://infoready.freshdesk.com

**Training Resources:**
- Video library: [[Training Modules 5-6]{.underline}](https://infoready.freshdesk.com/support/solutions/folders/14000121869)
- Live webinars: Quarterly refresher sessions
- User community forum

### Internal Contacts

**RDO Supervisor:** Hana Kabashi  
**VPR Office:** vpr@umd.edu  
**Limited Submissions:** limitedsubmissions@umd.edu

### Documentation Updates

**This manual should be reviewed:**
- Quarterly: Update with new SOPs and templates
- Annually: Comprehensive revision based on year review
- As needed: When InfoReady features change

**Version control:**
- Save dated versions: `Progress_Reports_Reference_Manual_v1.0_20251030.md`
- Track changes in Shared Drive
- Notify team of significant updates

---

**Document Version:** 1.0  
**Last Updated:** October 30, 2025  
**Next Review:** January 30, 2026  
**Maintained By:** Graduate Assistant, Division of Research
