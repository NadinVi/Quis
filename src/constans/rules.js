export const rulesText = {
  required: (field) => `${field} is required`,
  minLength: (length) => `At least ${length} characters.`,
  maxLength: (length) => `Less than ${length} characters.`,
};

export const quizzRules = {
  quizzTitle: {
    required: { value: true, message: rulesText.required('Quizz title') },
    minLength: { value: 7, message: rulesText.minLength(7) },
    maxLength: { value: 20, message: rulesText.maxLength(20) },
  },

  image: {
    required: { value: true, message: rulesText.required('Image') },
  },

  description: {
    required: { value: true, message: rulesText.required('Description') },
    minLength: { value: 20, message: rulesText.minLength(20) },
    maxLength: { value: 1000, message: rulesText.maxLength(100) },
  },
};
