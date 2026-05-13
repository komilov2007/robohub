// usePage.ts

export const usePage = () => {
  const reviews = [
    {
      id: 1,
      title: "answer_review_bad",
      description: "answer_review_bad_description",
      placeholder: "answer_review_bad_placeholder",

      color: "#F04438",
      bg: "#FFF1F3",
      border: "#FECACA",

      stars: 1,
    },

    {
      id: 2,
      title: "answer_review_poor",
      description: "answer_review_poor_description",
      placeholder: "answer_review_poor_placeholder",

      color: "#F97316",
      bg: "#FFF7ED",
      border: "#FED7AA",

      stars: 2,
    },

    {
      id: 3,
      title: "answer_review_neutral",
      description: "answer_review_neutral_description",
      placeholder: "answer_review_neutral_placeholder",

      color: "#EAB308",
      bg: "#FEFCE8",
      border: "#FDE68A",

      stars: 3,
    },

    {
      id: 4,
      title: "answer_review_good",
      description: "answer_review_good_description",
      placeholder: "answer_review_good_placeholder",

      color: "#22C55E",
      bg: "#F0FDF4",
      border: "#BBF7D0",

      stars: 4,
    },

    {
      id: 5,
      title: "answer_review_perfect",
      description: "answer_review_perfect_description",
      placeholder: "answer_review_perfect_placeholder",

      color: "#14B8A6",
      bg: "#F0FDFA",
      border: "#99F6E4",

      stars: 5,
    },
  ];

  return {
    reviews,
  };
};
