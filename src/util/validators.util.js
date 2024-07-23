export const validateName = (value) => {
    if (value.trim().length === 0) {
        return "Name is required";
    }

    if (value.trim().length > 50) {
        return `Name field cannot exceed 50 characters (${value.trim().length})`;
    }
}

export const validateEmail = (value) => {
    if (value.trim().length === 0) {
        return "Email is required";
    }

    if (value.trim().length > 254) {
        return `Email field cannot exceed 254 characters (${value.trim().length})`;
    }
}

export const validateMessage = (value) => {
    if (value.trim().length === 0) {
        return "Message is required";
    }

    if (value.trim().length > 5000) {
        return `Message field cannot exceed 5000 characters (${value.trim().length})`;
    }
}