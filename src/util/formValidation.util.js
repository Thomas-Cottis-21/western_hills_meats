import { validateEmail, validateMessage, validateName } from "./validators.util.js";

const validationRules = {
    name: validateName,
    email: validateEmail,
    message: validateMessage
};

export default validationRules;