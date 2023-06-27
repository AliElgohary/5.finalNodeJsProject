import { z } from "zod";
export const ValidateProduct = (req, res, next) =>{
    try {
        const schema = z.object({
            name: z.string(),
            price: z.number(),
            category_id: z.number()
        })
        req.body = schema.parse(req.body)
        next();
    } catch (error) {
        res.status(400).json((error));
    }
}