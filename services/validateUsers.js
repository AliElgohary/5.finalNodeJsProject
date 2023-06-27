import { z } from "zod";
export const ValidateUser = (req, res, next) =>{
    try {
        const schema = z.object({
            email: z.string().email('must be a valid email'),
            password: z.string(),
            passwordReapeat: z.string()
        })
        req.body = schema.parse(req.body)
        next();
    } catch (error) {
        res.status(400).json((error));
    }
}

export const ValidateLogin = (req, res, next) =>{
    try {
        const schema = z.object({
            email: z.string().email('must be a valid email'),
            password: z.string(),
        })
        req.body = schema.parse(req.body)
        next();
    } catch (error) {
        res.status(400).json((error));
    }
}

