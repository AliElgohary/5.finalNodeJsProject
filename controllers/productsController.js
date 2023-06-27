import * as categories from './categoryController.js'
let categoriesArray = categories.categories
let products = [];

export const getProducts = (req, res, next) => {
    try {
      res.send(products);
    } catch (err) {
      next(err);
    }
  };

export const createProduct = (req, res, next) => {
    try {
        const {name, price, category_id} = req.body;
        const doesCateExist = categoriesArray.find(c => c.id === category_id);
        if(!doesCateExist){
            return res.send('this category does not exist')
        }
        let id = products.length + 1;
        products.push({id, name, price, category_id});
        res.send('success');
    } catch (error) {
        res
        .status(400)
        .json({ error: "Category name must be at least 4 characters" });
    }
}

export const getProductById = (req, res, next) => {
    try {
      const productId = Number(req.params.id);
      const product = products.find((p) => p.id === productId);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.send(product);
    } catch (error) {
      res.status(500).send('Server error');
    }
  };

export const updateProductById = (req, res, next) => {
    try {
      const productId = Number(req.params.id);
      const { name, price, category_id } = req.body;
      const product = products.find((p) => p.id === productId);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      product.name = name;
      product.price = price;
      product.category_id = category_id;
      res.send(product);
    } catch (error) {
      res.status(400).json({ error: "Product data is invalid" });
    }
  };

  export const deleteProductById = (req, res, next) => {
    try {
      const productId = Number(req.params.id);
      const index = products.findIndex((p) => p.id === productId);
      if (index === -1) {
        return res.status(404).send('Product not found');
      }
      products.splice(index, 1);
      res.send('Product deleted successfully');
    } catch (error) {
      res.status(500).send('Server error');
    }
  };