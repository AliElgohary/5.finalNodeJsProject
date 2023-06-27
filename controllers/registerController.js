import { v4 } from "uuid";
export let users = [];
export const createUser = async (req, res, next) => {
    const { email, password, passwordReapeat } = await req.body;
    if (password === passwordReapeat) {
      const Id = users.length + 1;
      users.push({ Id, email, password });
      res.send(users);
    } else {
      res.status(400).send('please re-enter you password');
    }
  }
  