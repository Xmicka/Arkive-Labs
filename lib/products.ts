/* Toolkits Akesh sells on Gumroad. Articles reference these by key in
   their frontmatter (`product: ...`) to show a disclosed product box. */

export type Product = {
  name: string;
  url: string;
  price: string;
  summary: string;
  format: string;
};

export const PRODUCTS: Record<string, Product> = {
  "iso27001-risk-toolkit": {
    name: "ISO 27001 Risk Assessment Toolkit for SMEs",
    url: "https://akeshchandra.gumroad.com/l/iso27001-risk-toolkit",
    price: "$12",
    summary:
      "An editable methodology with 5 x 5 scales and an acceptance level, a 200-row risk register with automatic scoring and a heat map, a treatment plan, and a worked example for a fictional 18-person firm.",
    format: "Word + Excel",
  },
  "security-policy-pack": {
    name: "Information Security Policy Starter Pack",
    url: "https://akeshchandra.gumroad.com/l/security-policy-pack",
    price: "$12",
    summary:
      "Eight short, plain-English policies ready to edit in Word, a policy register with review reminders, and a rollout guide with a pre-launch checklist.",
    format: "Word + Excel",
  },
  "incident-response-toolkit": {
    name: "Security Incident Response Toolkit for SMEs",
    url: "https://akeshchandra.gumroad.com/l/incident-response-toolkit",
    price: "$14",
    summary:
      "An editable response plan with four severity levels, an incident log that sets severity automatically, a printable first-hour checklist and a post-incident review template.",
    format: "Word + Excel + PDF",
  },
  "supplier-security-assessment": {
    name: "Supplier Security Assessment Pack",
    url: "https://akeshchandra.gumroad.com/l/supplier-security-assessment",
    price: "$9",
    summary:
      "A supplier register with automatic tiering and review dates, a 30-question weighted questionnaire with scoring, a summary sheet and request email wording.",
    format: "Excel",
  },
  "isms-internal-audit-toolkit": {
    name: "ISMS Internal Audit Toolkit (ISO 27001)",
    url: "https://akeshchandra.gumroad.com/l/isms-internal-audit-toolkit",
    price: "$12",
    summary:
      "An audit programme, a 40-question checklist with the evidence to look for, a findings and corrective action tracker, and audit plan and report templates.",
    format: "Excel + Word",
  },
};
