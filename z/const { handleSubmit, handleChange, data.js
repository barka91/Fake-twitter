const { handleSubmit, handleChange, data, errors } = useForm({
  validations: {
    name: {
      pattern: {
        value: '^[A-Za-z]*$',
        message: "You're not allowed to...",
      },
    },
    age: {
      custom: {
        isValid: (value) => parseInt(value, 10) > 17,
        message: 'You have to be at least 18 years old.',
      },
    },
    password: {
      required: {
        value: true,
        message: 'This field is required',
      },
      custom: {
        isValid: (value) => value.length > 6,
        message: 'The password needs to be at...',
      },
    },
  },
});