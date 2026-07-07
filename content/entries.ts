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
      "The Anatomy of Trust by Brené Brown speech transcript",
    goal: "Reflect on one relationship through the lens of the BRAVING framework.",
    action:
      "Avoid common enemy intimacy when socializing with friends. Do better at truly holding things in the Vault.",
    resonance:
      "Trust is built through small, consistent actions over time, not grand gestures or declarations. Also, we need to start at self-trust before we can build trust with others.",
    link: "https://jamesclear.com/great-speeches/the-anatomy-of-trust-by-brene-brown",
  },
  {
    week: 3,
    date: "Week of June 9, 2026",
    title: "Leadership from the Whole",
    insight:
      "12 Qualities of Effective Design Organizations by Peter Merholz and Kristin Skinner",
    goal: "Brainstorm standards of quality for my own work.",
    action:
      "Embrace and aim to learn about business objectives and constraints when designing solutions, rather than just focusing on the user experience.",
    resonance:
      "Facilitating the discussion for this reading made me realize that different designers are all looking for different things in a design organization, and that there is no one-size-fits-all approach to leadership.",
    link: "https://www.oreilly.com/content/12-qualities-of-effective-design-organizations/",
  },
  {
    week: 4,
    date: "Week of June 16, 2026",
    title: "Leading from the Whole: Culture",
    insight:
      "Lateral leadership - leadership without a superior function by Wolfgang Grilz",
    goal: "Update from Week 2 goal: I can improve my reliability and boundaries within a specific relationship of mine",
    action:
      "Volunteer to facilitate a team session and observe how the dynamic shifts when I step into that role.",
    resonance:
      "A lack of authority does not necessarily mean a lack of influence. In fact, it serves as an opportunity to build trust and credibility with peers, which can be more powerful than positional authority.",
    link: "https://www.linkedin.com/pulse/lateral-leadership-without-superior-function-wolfgang-grilz/",
  },
  {
    week: 5,
    date: "Week of June 23, 2026",
    title: "Leadership from the Side",
    insight:
      "Leadership That Gets Results by Daniel Goleman",
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
    title: "Goodreads Site Visit",
    insight:
      "Goodreads | About us",
    goal: "Integrate equity considerations into my design process from the start, not as an afterthought.",
    action:
      "For the next project, build in a structured bias-check step before presenting work to stakeholders.",
    resonance:
      "The case studies on inclusive design showed me that better design and more ethical design are often the same thing.",
    link: "https://www.goodreads.com/about/us",
  },
];
