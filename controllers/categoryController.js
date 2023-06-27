export let categories = [];

export const createCategory = (req, res, next) => {
  try {
    const { name } = req.body;
    if (name && name.length <= 3) {
      res
        .status(400)
        .json({ error: "Category name must be at least 4 characters" });
      return;
    }
    let id = categories.length + 1;
    categories.push({ id, name });
    res.send("succeeded");
  } catch (err) {
    next(err);
  }
};

export const getCategories = (req, res, next) => {
  try {
    res.send(categories);
  } catch (err) {
    next(err);
  }
};

export const getCategoriesById = (req, res, next) => {
  try {
    const categoryId = Number(req.params.id);
    const category = categories.find((c) => c.id === categoryId);
    res.send(category);
  } catch (err) {
    next(err);
  }
};

export const updateCategory = (req, res, next) => {
  try {
    const categoryId = Number(req.params.id);
    const { name } = req.body;
    const category = categories.find((c) => c.id === categoryId);
    category.name = name;
    res.send(category);
  } catch (err) {
    next(err);
  }
};
