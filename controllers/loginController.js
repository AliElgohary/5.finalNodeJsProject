import * as registeredUsers from "./registerController.js";
import  Jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const usersArray = registeredUsers.users;

export const login = (req, res, next) => {
  const { email, password } = req.body;
  const user = usersArray.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const token = Jwt.sign(user, process.env.JWT_SECRET)
  res.send({...user, token});
};
