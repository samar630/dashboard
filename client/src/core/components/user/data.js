  export  const inputsDataDashboard = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    }
  ]
  export  const inputsAddress = [
    {
      id: 6,
      name: "country",
      type: "text",
      placeholder: "country",
      label: "country",
      required: true
    },
    {
      id: 7,
      name: "city",
      type: "text",
      placeholder: "city",
      label: "City",
      required: true
    },
    {
      id: 8,
      name: "street",
      type: "text",
      placeholder: "street",
      label: "street",
      required: true
    },
    {
      id: 8,
      name: "zipCode",
      type: "text",
      placeholder: "zipCode",
      label: "zipCode",
      required: true
    },
   
  ]
  export  const inputsPersonalInfo = [
    {
      id: 9,
      name: "phone",
      type: "text",
      placeholder: "country",
      label: "country",
      required: true
    },
    {
        id: 12,
        name: "age",
        type: "text",
        placeholder: "Age",
        label: "Age",
        required: true
    },
    {
      id: 10,
      name: "isAdmin",
      type: "boolean",
      placeholder: "isAdmin",
      label: "isAdmin",
      required: true
    },
    {
      id: 11,
      name: "image",
      type: "file",
      placeholder: "image",
      label: "image",
      required: true
    },
 
   
  ]