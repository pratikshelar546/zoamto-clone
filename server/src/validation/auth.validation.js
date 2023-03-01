import joi from "joi";

export const validationSignup = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().required().min(3),
  
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    address: joi
      .array()
      .items(joi.object({ details: joi.string(), for: joi.string() })),
      // phoneNumber: joi.array().items(joi.number().min(10).max(10)),
    email: joi.string().email().required(),
  });
  return Schema.validateAsync(userData);
};

export const validationSignin = (userData)=>{
    const Schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    })
    return Schema.validateAsync(userData);
}