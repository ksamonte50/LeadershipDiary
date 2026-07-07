export type DiaryEntry = {
  week: number;
  date: string;
  title?: string;
  insight: string;
  goal: string;
  action: string;
  resonance?: string;
};

export const entries: DiaryEntry[] = [
  {
    week: 1,
    date: "Week of May 26, 2026",
    title: "Starting the Journey",
    insight:
      "Leadership isn't about having all the answers — it's about asking the right questions and creating space for others to contribute their perspectives.",
    goal: "Identify my default leadership tendencies and understand where they serve me and where they hold me back.",
    action:
      "Practice pausing before responding in group settings to create space for others' ideas first.",
    resonance:
      "The idea that self-awareness is the foundation of authentic leadership really landed for me.",
  },
  {
    week: 2,
    date: "Week of June 2, 2026",
    title: "Knowing My Strengths",
    insight:
      "My top strengths reveal a pattern — I naturally gravitate toward strategic thinking and connection, but I sometimes overlook the need for structure and follow-through.",
    goal: "Build a more intentional practice around my weaker domains without abandoning what makes me effective.",
    action:
      "Start each week by identifying one strength I'll lean into and one gap I'll actively address.",
    resonance:
      "Seeing my strengths laid out as a profile helped me understand why certain projects energize me while others drain me.",
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
  },
  {
    week: 7,
    date: "Week of July 7, 2026",
    title: "Culture Building & What's Next",
    insight:
      "Culture isn't something you declare — it's the accumulation of small, consistent behaviors, norms, and stories that people live by every day.",
    goal: "Identify the culture-building moves I want to make in my next team or organization, and practice them now.",
    action:
      "Write a short personal leadership manifesto that captures my values and the culture I want to create.",
    resonance:
      "Ending this course with a reflection on growth made me realize how much my understanding of leadership has expanded.",
  },
];
