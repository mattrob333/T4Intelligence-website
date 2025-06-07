"use client"
import { useState } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { CheckCircle, PlayCircle, FileText } from "lucide-react"
import { motion } from "framer-motion"
import DnaMapModal from "@/components/dna-map-modal" // Import the modal

const trustElements = ["30-Day Delivery Guaranteed", "100% Success Rate", "Average 47% Process Improvement"]

const sampleDnaMapContent = `
## Business DNA Map™ Example - Global Parts Manufacturing Inc.

### Executive Overview Dashboard

**COMPANY:** Global Parts Manufacturing Inc.
**REVENUE:** $150M Annual
**EMPLOYEES:** 450
**LOCATIONS:** 3 Manufacturing Facilities, 1 HQ
**MAPPED:** December 2024
**CONFIDENTIALITY:** Level 3 (Internal Use Only)

---

### 1. Core Business Processes

#### 1.1. Order-to-Cash (OTC)
   - **Current State:** Semi-automated, involves 7 systems, 12 manual touchpoints.
   - **Average Cycle Time:** 7.2 days
   - **Pain Points:** Data entry errors (3%), delays in credit checks (24h avg), manual invoice generation.
   - **Systems Involved:** Salesforce (CRM), NetSuite (ERP), Custom Order Portal, ShipStation, Stripe.
   - **Key Personnel:** Sales Ops Team (5), Finance Team (3).
   - **Automation Opportunity Score:** 8/10 (High potential for RPA in data validation & invoice processing).
   - **Identified Savings (Annual):** $150,000 (Error reduction, time savings).

#### 1.2. Procure-to-Pay (P2P)
   - **Current State:** Largely manual, paper-based approvals for POs > $5K.
   - **Average Cycle Time:** 15 days
   - **Pain Points:** Lost invoices, delayed payments, lack of spend visibility.
   - **Systems Involved:** NetSuite (ERP), Email for approvals.
   - **Key Personnel:** Procurement Team (4), AP Clerks (2).
   - **Automation Opportunity Score:** 9/10 (AI for invoice matching, automated approval workflows).
   - **Identified Savings (Annual):** $220,000 (Early payment discounts, reduced manual labor).

#### 1.3. Production Planning & Scheduling
   - **Current State:** Excel-based, reliant on tribal knowledge of 2 senior planners.
   - **Average Downtime (Material Shortage):** 8 hours/month per facility.
   - **Pain Points:** Inaccurate forecasting, sub-optimal machine utilization (65%).
   - **Systems Involved:** Custom MES, Excel.
   - **Key Personnel:** Planning Dept (2), Facility Managers (3).
   - **Automation Opportunity Score:** 7/10 (AI for demand forecasting, predictive maintenance scheduling).
   - **Identified Savings (Annual):** $450,000 (Reduced downtime, improved utilization to 75%).

---

### 2. Key Systems & Integrations

| System Name         | Type   | Vendor     | Key Functionality      | Integration Points (Current) | Integration Health |
|---------------------|--------|------------|------------------------|------------------------------|--------------------|
| Salesforce          | CRM    | Salesforce | Sales, Cust. Mgmt      | NetSuite (Orders), Mailchimp | Green (API Stable) |
| NetSuite            | ERP    | Oracle     | Finance, Inventory     | Salesforce, ShipStation    | Yellow (Batch Sync)|
| Custom Order Portal | WebApp | In-House   | Customer Orders        | Salesforce (Manual Entry)    | Red (No Direct API)|
| ShipStation         | Ship   | Auctane    | Shipping & Logistics   | NetSuite                     | Green (API Stable) |
| Custom MES          | MES    | In-House   | Manufacturing Exec.    | None (Data Export Only)    | Red (Isolated)     |

---

### 3. Knowledge & Data Assets

#### 3.1. Critical Data Sources
   - Customer Purchase History (Salesforce, 5 years)
   - Inventory Levels & Movements (NetSuite, real-time)
   - Production Output & Quality Metrics (Custom MES, daily logs)
   - Supplier Performance Data (NetSuite, manual tracking in Excel)

#### 3.2. Tribal Knowledge Hotspots
   - **John Doe (Senior Planner):** Knows machine-specific quirks and optimal run-times not documented.
   - **Jane Smith (Sales Ops Lead):** Understands complex customer discount structures not fully in CRM.
   - **Maintenance Team Leads (All Facilities):** Implicit knowledge of equipment failure precursors.

---

### 4. Top 3 AI-Powered Automation Opportunities (Initial Assessment)

1.  **AI-Driven Invoice Processing (P2P):**
    - **Description:** Use OCR and NLP to read incoming invoices, match against POs in NetSuite, flag discrepancies, and route for automated approval/payment.
    - **Estimated ROI:** 650% (Year 1)
    - **Complexity:** Medium
    - **Required Data:** Historical invoices, PO data, Vendor master file.

2.  **Predictive Maintenance for CNC Machines (Production):**
    - **Description:** Analyze sensor data from CNC machines (requires sensor retrofitting) using ML to predict failures and schedule maintenance proactively.
    - **Estimated ROI:** 400% (Year 1, post-sensor deployment)
    - **Complexity:** High (Hardware + Software)
    - **Required Data:** Machine sensor data (temp, vibration, etc.), historical maintenance logs.

3.  **Automated Sales Order Validation & Entry (OTC):**
    - **Description:** RPA bot to validate orders from Custom Order Portal against CRM data, check credit, and enter into NetSuite.
    - **Estimated ROI:** 300% (Year 1)
    - **Complexity:** Medium
    - **Required Data:** Order portal data, Salesforce customer data, NetSuite product/pricing.

---

### 5. Next Steps & Recommendations

- Prioritize P2P AI-Driven Invoice Processing for quick win.
- Initiate data collection strategy for Predictive Maintenance (CNC sensors).
- Develop API for Custom Order Portal to enable seamless OTC automation.
- Conduct knowledge capture sessions with John Doe, Jane Smith, and Maintenance Leads.

**End of Sample DNA Map**
`

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary-black overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-hero-headline-mobile md:text-hero-headline text-text-primary mb-6">
              Stop Forcing Your Business to Speak <span className="text-primary-green">AI's Language</span>
            </h1>
            <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-10">
              We Map Your Business DNA So AI Finally Understands YOU
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10 aspect-video bg-card-bg border border-border-color rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <PlayCircle className="h-16 w-16 text-primary-green mx-auto mb-4" />
              <p className="text-text-secondary">2-Minute Explainer Video Placeholder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <CustomButton
              id="main-cta-business-dna" // Added ID for potential scroll target
              variant="primary"
              size="default"
              onClick={() => console.log("Start Your Mapping clicked")}
            >
              Start Your Mapping - $15K-$25K
            </CustomButton>
            <CustomButton variant="secondary" size="secondary" onClick={() => setIsModalOpen(true)}>
              <FileText className="mr-2 h-5 w-5" /> See Sample DNA Map
            </CustomButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="space-y-3 md:space-y-0 md:flex md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-3"
          >
            {trustElements.map((badge, index) => (
              <div key={index} className="flex items-center justify-center text-text-secondary text-sm">
                <CheckCircle className="h-4 w-4 mr-2 text-primary-green" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <DnaMapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} markdownContent={sampleDnaMapContent} />
    </>
  )
}
