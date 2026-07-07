export type DiaryEntry = {
  week: number;
  date: string;
  title?: string;
  insight: string;
  goal: string;
  action: string;
  resonance?: string;
  link?: string;
};

export const entries: DiaryEntry[] = [
  {
    week: 2,
    date: "Week of June 2, 2026",
    title: "Self Leadership",
    insight:
      "My top strengths reveal a pattern — I naturally gravitate toward strategic thinking and connection, but I sometimes overlook the need for structure and follow-through.",
    goal: "Build a more intentional practice around my weaker domains without abandoning what makes me effective.",
    action:
      "Start each week by identifying one strength I'll lean into and one gap I'll actively address.",
    resonance:
      "Seeing my strengths laid out as a profile helped me understand why certain projects energize me while others drain me.",
    link: "https://jamesclear.com/great-speeches/the-anatomy-of-trust-by-brene-brown",
  },
  {
    week: 3,
    date: "Week of June 9, 2026",
    title: "Influence & Power",
    insight:
      "Influence isn't manipulation — it's the ability to create conditions where people willingly move toward a shared vision. Power is a tool, and its ethics depend entirely on intent.",
    goal: "Develop a personal framework for ethical influence that I can articulate and stand behind.",
    action:
      "In my next group project, consciously name the influence strategy I'm using and why.",
    resonance:
      "The distinction between positional and relational power reframed how I think about leading without authority.",
    link: "https://www.oreilly.com/content/12-qualities-of-effective-design-organizations/",
  },
  {
    week: 4,
    date: "Week of June 16, 2026",
    title: "Leading Peers",
    insight:
      "Leading people who are your equals is fundamentally different from leading down a hierarchy — it requires more vulnerability, more negotiation, and a willingness to lead from behind.",
    goal: "Get more comfortable with the tension between being a peer and taking initiative.",
    action:
      "Volunteer to facilitate a team session and observe how the dynamic shifts when I step into that role.",
    resonance:
      "Hearing classmates share their experiences with peer conflict made me realize this is universal, not a personal failing.",
    link: "https://www.linkedin.com/pulse/lateral-leadership-without-superior-function-wolfgang-grilz/",
  },
  {
    week: 5,
    date: "Week of June 23, 2026",
    title: "Facilitation as Leadership",
    insight:
      "Great facilitation is invisible — it's not about directing the conversation but about designing the conditions where the best ideas emerge naturally from the group.",
    goal: "Move from being a participant who contributes ideas to a facilitator who helps the group produce its best collective thinking.",
    action:
      "Practice one new facilitation technique (e.g., silent brainstorming, affinity mapping) in a real setting this week.",
    resonance:
      "The idea that facilitation is a design skill, not just a meeting-management skill, changed how I think about this competency.",
    link: "https://www.cdfifund.gov/system/files/documents/%2851%29-leadership-that-gets-results.pdf?authuser=0",
  },
  {
    week: 6,
    date: "Week of June 30, 2026",
    title: "Equity & Ethics in Design",
    insight:
      "Counter-bias work isn't a checklist — it requires ongoing discomfort, structural change, and a willingness to interrogate my own assumptions constantly.",
    goal: "Integrate equity considerations into my design process from the start, not as an afterthought.",
    action:
      "For the next project, build in a structured bias-check step before presenting work to stakeholders.",
    resonance:
      "The case studies on inclusive design showed me that better design and more ethical design are often the same thing.",
    link: "https://www.goodreads.com/about/us",
  },
];
