# Column Definitions and Examples for Smartsmailer Analysis

## **Column Definitions & Methodology**

### **1. Opportunity Name**
**Definition:** The official title of the funding opportunity as listed in the solicitation.
**Example:** "RFA-AG-26-025 Claude D. Pepper Older Americans Independence Centers (P30)"
**How we determined this:** Copied directly from Smartsmailer alert or official NIH/sponsor documentation.

### **2. Sponsor** 
**Definition:** The government agency or organization offering the funding.
**Example:** "National Institutes of Health/NIA"
**How we determined this:** Identified from the solicitation header or contact information.

### **3. Deadline**
**Definition:** The application due date(s) for the opportunity.
**Example:** "20-Oct-2025"
**How we determined this:** Found in the "Deadline Date" field of Smartsmailer or official solicitation.

### **4. Amount**
**Definition:** Total funding available or maximum award amount.
**Example:** "$4,625,000"
**How we determined this:** Listed in the "Funding" field of Smartsmailer or budget section of solicitation.

### **5. Duration**
**Definition:** Length of the funding period.
**Example:** "5 years"
**How we determined this:** Found in solicitation details or inferred from award type (P30 = typically 5 years).

### **6. Target Audience**
**Definition:** Primary intended applicants for the opportunity.
**Example:** "Institutions/Faculty" vs. "PhD students" vs. "Law enforcement"
**How we determined this:** 
- Analyzed synopsis language
- **Faculty-directed example:** "applications for centers of excellence in geriatrics research"
- **Student-only example:** "PhD candidate at a university working on dissertation"

### **7. Faculty Directed**
**Definition:** Whether the opportunity is primarily aimed at faculty researchers (Yes/No).
**Example:** "Yes" for research grants, "No" for student competitions
**How we determined this:** Applied Hana's guidance - opportunities exclusively for students = "No"

### **8. Geographic Restrictions**
**Definition:** Any geographic limitations on eligibility.
**Example:** "City of Lowell only" vs. "None mentioned"
**How we determined this:** 
- **Parker Foundation:** Synopsis stated "grants that benefit the residents of the City of Lowell"
- **Most NIH grants:** No geographic restrictions mentioned

### **9. Geographic Restriction Excludes UMD**
**Definition:** Whether geographic restrictions make UMD ineligible.
**Example:** "Yes" for Lowell, MA restriction; "No" for most opportunities
**How we determined this:** UMD is in Adelphi, Maryland - excluded from Lowell, MA-only programs.

### **10. UMD Institutional Eligibility**
**Definition:** Whether UMD as an institution can apply.
**Example:** "No - UMD is not a crime laboratory" for DNA CEBR programs
**How we determined this:**
- **Research universities:** Generally eligible for NIH/NSF
- **Crime lab programs:** UMD doesn't operate a forensic crime laboratory
- **Medical examiner programs:** UMD doesn't have forensic pathology fellowship

### **11. Institutional Submission Limits**
**Definition:** Restrictions on number of applications per institution.
**Example:** "CONFIRMED - Only one application per institution allowed"
**How we determined this:** 
- **Web searched** for university limited submission pages
- **Found explicit language** in solicitations
- **Cross-referenced** multiple sources

### **12. Limited Submission Identified**
**Definition:** Final determination of whether this is a limited submission (YES/NO/UNCLEAR).
**Example:** "YES" when institutional limits confirmed
**How we determined this:** Based on evidence found in column 13.

### **13. Evidence of Limits**
**Definition:** Specific evidence supporting the limited submission determination.
**Examples:**
- **Strong evidence:** "Multiple NIH RFA documents confirm: 'Only one application per institution is allowed'"
- **No evidence:** "NSF solicitation explicitly states 'There are no restrictions or limits'"
- **Unclear:** "Small number suggests possible institutional limits but not explicitly stated"

**How we gathered evidence:**
1. **Direct solicitation language** (most reliable)
2. **University limited submission pages** (Penn State, BU, Vanderbilt)
3. **Historical award patterns** (very limited awards may suggest limits)
4. **Cross-referencing multiple sources**

### **14. Action Required**
**Definition:** What UMD should do with this opportunity.
**Examples:**
- **"REQUIRES LIMITED SUBMISSION POSTING in InfoReady"** - Confirmed limited submission
- **"No action - UMD not eligible"** - Geographic or institutional restrictions exclude UMD
- **"VERIFY if institutional submission limits exist"** - Unclear evidence

### **15. Notes**
**Definition:** Additional context, requirements, or details about the opportunity.
**Example:** "P30 center grants require $3M+ research base, 4+ center members"

## **Detailed Examples of Evidence Collection**

### **Example 1: Claude D. Pepper Centers - CONFIRMED Limited Submission**

**Research Process:**
1. **Web searched:** "Claude D. Pepper" centers institutional submission limits NIH NIA
2. **Found multiple sources:**
   - RFA-AG-23-017: "Only one application per institution is allowed"
   - RFA-AG-25-020: "An applicant institution may submit only one OAIC application"
   - Historical RFAs consistently show same language
3. **Result:** "CONFIRMED - Only one application per institution allowed"

### **Example 2: Environmental Health Sciences Core Centers - CONFIRMED Limited Submission**

**Research Process:**
1. **Web searched:** NIH P30 Environmental Health Sciences Core Centers institutional submission limits
2. **Found evidence:**
   - Penn State limited submissions page lists this opportunity
   - Boston University page states: "BU may forward one application"
   - Multiple university limited submission calendars include this program
3. **Result:** "CONFIRMED - P30 centers typically limited to one per institution"

### **Example 3: NSF Physics Program - NO Limited Submission**

**Research Process:**
1. **Web searched:** NSF Division of Physics Investigator-Initiated Research Projects institutional limits
2. **Found explicit language in solicitation:** "There are no restrictions or limits"
3. **Confirmed across multiple years** of solicitations
4. **Result:** "NO - NSF solicitation explicitly states 'There are no restrictions or limits'"

### **Example 4: Japan Foundation IPS - CONFIRMED Limited Submission**

**Research Process:**
1. **Web searched:** "Japan Foundation" "Institutional Project Support" submission limits
2. **Found consistent language across multiple sources:**
   - Official Japan Foundation page: "Multiple applications from one institution will not be accepted"
   - Vanderbilt University treats as limited submission
   - Multiple historical solicitations confirm same language
3. **Result:** "CONFIRMED - Multiple applications from one institution NOT accepted"

### **Example 5: Growing Great Ideas - UNCLEAR (Needs Verification)**

**Research Process:**
1. **Web searched:** "Growing Great Ideas: Research Education Course" NIH institutional limits
2. **Found mixed evidence:**
   - No explicit institutional limits stated in solicitation
   - BUT: Historical data shows very few awards (1 in 2017, 3 in 2022)
   - Small number of awards may suggest informal limits
3. **Result:** "UNCLEAR - NEEDS VERIFICATION" - requires follow-up with NIH or peer institutions

## **Quality Assurance Methods**

### **Cross-Verification**
- **Multiple sources:** Never rely on single source for limited submission determination
- **University pages:** Check 2-3 different university limited submission calendars
- **Historical consistency:** Verify limits exist across multiple funding cycles

### **Evidence Hierarchy (Most to Least Reliable)**
1. **Direct solicitation language** ("only one application per institution")
2. **Multiple university limited submission pages** listing the opportunity
3. **Historical award patterns** (very few awards may suggest limits)
4. **Single source** mentioning limits (requires additional verification)

### **Documentation Standards**
- **Specific quotes** with source attribution
- **Multiple sources** for significant determinations
- **Clear distinction** between confirmed, unclear, and no evidence
- **Actionable recommendations** for unclear cases

This methodology ensures thorough, evidence-based analysis that follows Hana's framework while providing clear documentation for decision-making.
