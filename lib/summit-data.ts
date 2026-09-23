export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Themes", href: "#themes" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "Team", href: "#team" },
]

export const STATS = [
  { value: "4", label: "Themes" },
  { value: "7", label: "Events" },
  { value: "1.5M", label: "Prize Pool (INR)" },
  { value: "10M", label: "Pre-Seed (INR)" },
]

export const OVERVIEW_CARDS = [
  {
    title: "Agentic AI Hackathon",
    body: "Build autonomous problem-solving agents backed by an exciting INR 1.5 Million prize pool.",
  },
  {
    title: "Pre-Seed Funding Pool",
    body: "Access to an INR 10 Million pre-seed funding pool driven by RIDE to incubate promising AI ventures.",
  },
  {
    title: "Institutional Collaboration",
    body: "Organized by Jaypee Institute of Information Technology (JIIT) in partnership with the RIDE initiative.",
  },
]

export const HIGHLIGHTS = [
  {
    tag: "KEYNOTES",
    title: "Global Tech Talks",
    body: "World leaders presenting breakthroughs in autonomous agent architectures.",
  },
  {
    tag: "ACADEMIC",
    title: "Research & Innovation",
    body: "Peer-reviewed papers and frontier prototypes in multi-agent intelligence.",
  },
  {
    tag: "ENTERPRISE",
    title: "Industry Perspectives",
    body: "Executive insights on enterprise adoption, ROI, and agent workflows.",
  },
  {
    tag: "CONNECT",
    title: "Networking & Mix",
    body: "High-impact networking between researchers, developers, and founders.",
  },
  {
    tag: "FLAGSHIP SPRINT",
    title: "Agentic AI Hackathon",
    body: "INR 1.5M Prize Pool & INR 10M Pre-Seed Funding Pool.",
  },
  {
    tag: "SHOWCASE",
    title: "AI Expo Arena",
    body: "Interactive demonstration booths showcasing live enterprise agent systems.",
  },
  {
    tag: "DEBATES",
    title: "Panel Discussions",
    body: "Thought leaders tackling ethics, governance, safety, and agent alignment.",
  },
]

export const THEMES = [
  {
    tag: "SECURITY TRACK",
    title: "Agentic AI for Cybersecurity",
    body: "Deploying self-governing agents for real-time vulnerability detection, automated threat containment, and zero-trust protocol enforcement.",
    chips: ["Threat Defense", "Auto-Forensics"],
  },
  {
    tag: "HEALTH TRACK",
    title: "Agentic AI for Healthcare",
    body: "Empowering clinical decision support, biomedical data synthesis, and autonomous patient monitoring pipelines with verifiable safety.",
    chips: ["Clinical Agents", "Biomedical LLMs"],
  },
  {
    tag: "LANGUAGE TRACK",
    title: "Agentic AI for NLP",
    body: "Next-generation multi-turn conversational agents, autonomous chain-of-thought synthesis, cross-lingual intelligence, and semantic workflows.",
    chips: ["Reasoning Chains", "Autonomous Dialogue"],
  },
  {
    tag: "OPEN TRACK",
    title: "Agentic AI for Open Innovation",
    body: "Cross-disciplinary breakthrough applications unlocking societal impact, sustainability, education, economics, and robotics frontiers.",
    chips: ["Cross-Disciplinary", "Frontier Tech"],
  },
]

export const SCHEDULE = [
  {
    day: "Day 1: Friday, Oct 30, 2026",
    note: "Tentative Outline (TBD)",
    sessions: [
      {
        time: "09:00 \u2013 10:30 AM",
        title: "Inaugural Ceremony & Opening Keynote",
        body: "Welcome address and opening perspectives on Agentic AI.",
      },
      {
        time: "11:00 AM",
        title: "Agentic AI Hackathon Sprint Kickoff",
        body: "Problem statement deep dive and development sprint begins.",
      },
      {
        time: "11:30 AM \u2013 01:00 PM",
        title: "Global Tech Talks",
        body: "Presentations from autonomous agents researchers.",
      },
      {
        time: "02:30 \u2013 05:00 PM",
        title: "Research Track & Panel Discussions",
        body: "Parallel sessions across cybersecurity, health, and NLP.",
      },
    ],
  },
  {
    day: "Day 2: Saturday, Oct 31, 2026",
    note: "Tentative Outline (TBD)",
    sessions: [
      {
        time: "09:30 \u2013 11:00 AM",
        title: "Industry Perspectives & Expo",
        body: "Live demonstration stalls and enterprise case studies.",
      },
      {
        time: "11:30 AM \u2013 01:30 PM",
        title: "Hackathon Demos & Jury Evaluation",
        body: "Finalist teams showcase working autonomous agent prototypes.",
      },
      {
        time: "02:30 \u2013 04:00 PM",
        title: "Pre-Seed Venture Pitch Session",
        body: "Pitches for the INR 10 Million pre-seed funding pool.",
      },
      {
        time: "04:30 \u2013 05:30 PM",
        title: "Valedictory & Prize Distribution",
        body: "Awarding INR 1.5 Million in prizes and concluding remarks.",
      },
    ],
  },
]

type Member = { name: string; role: string }

export const TEAM: { track: string; title: string; body: string; members: Member[] }[] = [
  {
    track: "SUMMIT LEADERSHIP",
    title: "Organizing Chairs & Functional Head",
    body: "Pioneering academic guidance and summit direction.",
    members: [
      { name: "Prof. Mukesh Saraswat", role: "Organizing Chair \u00B7 Computer Science & Engineering" },
      { name: "Dr. Himani Bansal", role: "Organizing Co-Chair \u00B7 Information Technology" },
      { name: "Dr. Vinay Anand Tikkiwal", role: "Functional Head \u00B7 Engineering & Technology" },
    ],
  },
  {
    track: "DESIGN AND PR",
    title: "Design and PR Team",
    body: "Visual identity, creative media, communications, and public relations.",
    members: [
      { name: "Aakriti Bhardwaj", role: "Team Lead" },
      { name: "Aparna Arya", role: "Faculty Member" },
      { name: "Shagun Gupta", role: "Faculty Member" },
    ],
  },
  {
    track: "REGISTRATION",
    title: "Registration Team",
    body: "Participant onboarding, registrations, delegate passes, and helpdesk.",
    members: [
      { name: "Piyush Sharma", role: "Team Lead" },
      { name: "Niraj Kumar", role: "Faculty Member" },
    ],
  },
  {
    track: "TECHNICAL",
    title: "Technical Team",
    body: "Hackathon architecture, technical tracks, computing labs, and execution.",
    members: [
      { name: "Akanksha Mehndiratta", role: "Lead - Planning" },
      { name: "Sandeep Raj", role: "Lead - Execution" },
      { name: "Ruchika Bala", role: "Faculty Member" },
      { name: "Akanksha Singh", role: "Faculty Member" },
      { name: "Meenu Shukla", role: "Faculty Member" },
      { name: "Neeraj Pathak", role: "Faculty Member" },
      { name: "Noor Mohammad", role: "Faculty Member" },
      { name: "Santosh Ray", role: "Faculty Member" },
      { name: "Jiddu Krishnan O P", role: "Faculty Member" },
      { name: "Piyush Kushwaha", role: "Faculty Member" },
      { name: "Santosh Kumar", role: "Faculty Member" },
    ],
  },
  {
    track: "LEADERSHIP OUTREACH",
    title: "Leadership Outreach Team",
    body: "Institutional partnerships, academic liaisons, and dignitary invitations.",
    members: [
      { name: "Sajai Vir Singh", role: "Team Lead" },
      { name: "Ankur Gupta", role: "Faculty Member" },
      { name: "Ila Naqvi", role: "Faculty Member" },
      { name: "Rajshree Singh", role: "Faculty Member" },
      { name: "Vaibhav Sharma", role: "Faculty Member" },
    ],
  },
  {
    track: "ROUNDTABLE PLANNING",
    title: "Roundtable Planning Team",
    body: "Executive roundtables, policy forums, and strategic brainstorms.",
    members: [
      { name: "Divya Kaushik", role: "Team Lead" },
      { name: "Kumar Mohit", role: "Faculty Member" },
      { name: "Deepti Singh", role: "Faculty Member" },
    ],
  },
  {
    track: "PANEL DISCUSSION & EXPERT TALKS",
    title: "Panel Discussion & Expert Talks Team",
    body: "Keynote curation, industry panellists, and academic discourse moderation.",
    members: [
      { name: "Anubhuti Roda Mohindra", role: "Team Lead" },
      { name: "Aditi Sharma", role: "Faculty Member" },
      { name: "Lakhveer Kaur", role: "Faculty Member" },
      { name: "Madhav Bansal", role: "Faculty Member" },
    ],
  },
  {
    track: "EXPO",
    title: "Expo Team",
    body: "Startup demo booths, tech showcases, and sponsor engagement arena.",
    members: [
      { name: "Amit Verma", role: "Team Lead" },
      { name: "Bhartendu Chaturvedi", role: "Faculty Member" },
      { name: "Amita Bhagat", role: "Faculty Member" },
      { name: "Harish Bishwakarma", role: "Faculty Member" },
      { name: "Minal Tandekar", role: "Faculty Member" },
      { name: "Rishabh Negi", role: "Faculty Member" },
    ],
  },
  {
    track: "HOSPITALITY",
    title: "Hospitality Team",
    body: "Guest reception, accommodation, catering, and campus protocol.",
    members: [
      { name: "Himanshu Agrawal", role: "Team Lead" },
      { name: "Jyoti Rani", role: "Faculty Member" },
    ],
  },
  {
    track: "LOGISTIC",
    title: "Logistic Team",
    body: "Venue infrastructure, transportation, equipment, and event operations.",
    members: [
      { name: "Praveen Kumar Sharma", role: "Team Lead" },
      { name: "Ankit Kumar Saini", role: "Faculty Member" },
      { name: "Gaurav Sinha", role: "Faculty Member" },
      { name: "Ravi Prakash Verma", role: "Faculty Member" },
    ],
  },
]

export function initials(name: string) {
  const parts = name.replace(/(Prof\.|Dr\.|O P)/g, "").trim().split(/\s+/)
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase()
}
