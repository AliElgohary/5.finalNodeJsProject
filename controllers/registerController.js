import { z } from 'zod';

export let users = [];

export const createUser = (req, res, next) => {
  const { email, password, passwordRepeat } = req.body;
  const id = users.length + 1;
  if (users.some(user => user.email === email)) {
    return res.status(400).send('Email is already in use');
  }
  if (password !== passwordRepeat) {
    return res.status(400).send('Passwords do not match');
  }
  const user = { id, email, password };
  users.push(user);
  res.send("registeres");
};