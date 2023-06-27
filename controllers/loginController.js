import * as registeredUsers from "./registerController.js";
const usersArray = registeredUsers.users;

export const login = (req, res, next) => {
  const { email, password } = req.body;
  const user = usersArray.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  res.send(user);
};
