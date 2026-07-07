export type Strength = {
  name: string;
  rank: number;
  description: string;
};

export type Superpower = {
  name: string;
  description: string;
};

export type Baseline = {
  strengths: Strength[];
  superpowers: Superpower[];
  reflection: string;
};

export const baseline: Baseline = {
  strengths: [
    {
      name: "Developer",
      rank: 1,
      description:
        "You recognize and cultivate the potential in others. You spot the signs of each small improvement and love when you see someone make progress",
    },
    {
      name: "Woo",
      rank: 2,
      description:
        "You love meeting new people and winning them over. You enjoy socializing and making connections.",
    },
    {
      name: "Positivity",
      rank: 3,
      description:
        "You have contagious enthusiasm. You are naturaly upbeat and can energize others.",
    },
    {
      name: "Harmony",
      rank: 4,
      description:
        "You look for consensus. You have no use for unnecessary friction and guide others toward practical solutions.",
    },
    {
      name: "Communication",
      rank: 5,
      description:
        "You generaly find it easy to put your thoughts into words. You are a good conversationalist and presenter.",
    },
  ],
  superpowers: [
    {
      name: "Forgiveness",
      description:
        "Forgiving those who have done wrong; accepting others’ shortcomings; giving people a second chance; not being vengeful.",
    },
    {
      name: "Teamwork",
      description:
        "Working well as a member of a group or team; being loyal to the group; doing one's share.",
    },
    {
      name: "Kindness",
      description:
        "Doing favors and good deeds for others; helping them; taking care of them.",
    },
    {
      name: "Love",
      description:
        "Valuing close relations with others, in particular those in which sharing & caring are reciprocated; being close to people.",
    },
  ],
  reflection:
    "The collection of resources revealed that I am an empathetic synchronizer. My technical skills as an interaction designer are heavily amplified by my soft skills. I excel at keeping teams unified, energized, and moving forward harmoniously. By leaning on teammates who excel in rigid execution (to balance my tendency to procrastinate) and actively practicing asking for help, I possess a highly potent, deeply human approach to modern collaborative design.",
};
