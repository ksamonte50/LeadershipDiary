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
      name: "Strategic",
      rank: 1,
      description:
        "You sort through the clutter and find the best route forward. You find patterns where others see complexity.",
    },
    {
      name: "Futuristic",
      rank: 2,
      description:
        "You are inspired by the future and what could be. You inspire others with your visions of tomorrow.",
    },
    {
      name: "Connectedness",
      rank: 3,
      description:
        "You have faith in the links between all things. You see meaning and connections in events and patterns.",
    },
    {
      name: "Communication",
      rank: 4,
      description:
        "You find it easy to put thoughts into words. You are a good listener and an excellent conversationalist.",
    },
    {
      name: "Ideation",
      rank: 5,
      description:
        "You are fascinated by ideas. You are able to find connections between seemingly unrelated phenomena.",
    },
  ],
  superpowers: [
    {
      name: "Visionary Storyteller",
      description:
        "You paint vivid pictures of the future that make people want to follow. Your ability to translate abstract ideas into compelling narratives is your superpower.",
    },
    {
      name: "Pattern Detective",
      description:
        "You see connections others miss. Your mind naturally maps complex systems and finds the hidden logic in chaos.",
    },
  ],
  reflection:
    "Looking at my results, I see a strong pattern: I'm drawn to big-picture thinking and making meaning from complexity. My strengths cluster around strategic and creative domains. I notice I may need to be more intentional about execution, follow-through, and building structure — areas where my natural gifts don't automatically take me. This baseline feels like a honest starting point for the work ahead.",
};
