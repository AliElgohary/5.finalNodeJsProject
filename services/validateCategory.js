import { z } from "zod"; 

export const ValidateCategory = (req, res, next) =>{
    try {
        const schema = z.object({
            name: z.string()
        })
        req.body = schema.parse(req.body)
        next();
    } catch (error) {
        res.status(400).json((error));
    }
}
