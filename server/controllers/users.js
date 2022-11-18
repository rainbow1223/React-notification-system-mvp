import user from '../models/user.js';
import emailValidator from 'deep-email-validator';

export const login = async (req, res) => {
    const { email } = req.body;
    const { validators } = await emailValidator.validate(email)
    const { regex, typo, disposable } = validators;
    if (regex.valid && typo.valid && disposable.valid) {
        try {
            const result = await user.find({ email: email });
            if (result.length)
                res.json({ message: "already exist" });
            else {
                user.insertMany([{ email: email }]);
                res.json({ message: "new email" });
            }

        } catch (error) {
            res.json({ error: "error" });
        }
    } else {
        res.json({ error: "error" });
    }

}