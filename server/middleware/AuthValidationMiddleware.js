const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = function (req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Введены не все данные!' });
    }

    if (!validateEmail(email)) {
        return res.status(400).json({ message: "Email должен соответствовать формату name@mail.com!" });
    }

    if (password.length < 8) {
        return res.status(400).json({ message: "Ваш пароль должен содержать не менее 8 символов!" });
    }

    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    if (!upperCaseRegex.test(password) || !lowerCaseRegex.test(password)) {
        return res.status(400).json({ message: "Ваш пароль должен содержать буквы верхнего и нижнего регистра!" });
    }

    const digitRegex = /\d/;
    if (!digitRegex.test(password)) {
        return res.status(400).json({ message: "Ваш пароль должен содержать хотя бы одну цифру!" });
    }

    next();
}