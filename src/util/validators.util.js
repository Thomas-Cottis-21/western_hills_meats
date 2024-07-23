export const validateName = (value) => {
    if (value.trim().length === 0) {
        return "Name is required";
    }
}

export const validateEmail = (value) => {
    if (value.trim().length === 0) {
        return "Email is required";
    }
}

export const validateMessage = (value) => {
    if (value.trim().length === 0) {
        return "Message is required";
    }
}