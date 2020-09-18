import Product from '../models/Products';
import Category from '../models/Category';

class ProductsController {
  async store(req, res) {

    try {
      // Destructuring info
      const { name, category, price, imgURL, state } = req.body;

      // New model instance
      const newDoc = new Product({
        imgURL,
        name,
        price,
        state
      });

      if(!category) return res.status(400).json({error: 400, message: 'La CATEGORÍA es requerida.'});
      const categoryID = await Category.findOne({ name: category}) ;
      if(!categoryID) return res.status(404).json({error: 404, message: 'La CATEGORÍA enviada no existe.'});

      newDoc.category = categoryID._id;

      // Create doc
      const doc = await newDoc.save();
      // Response
      return res.status(201).json(doc); 

    } catch (error) {
      return res.json(error);
    }
  }

  async index(req, res) {
    try {

      // Search docs on DB
      const docs = await Product.find().populate('category');
      // Success response
      return res.status(200).json(docs);

    } catch (error) {
      return res.json(error);
    }
  }

  async create(req, res) {
    return res.json();
  }

  async show(req, res) {
    try {

      // Doc to search
      const doc = await Product.findById(req.params.id).populate('category');
      // Document existence validation
      if(!doc) return res.status(400).json({error: 404, message: 'El PRODUCTO no existe en el inventario.'});
      // Success response
      return res.status(200).json(doc);
      
    } catch (error) {
      return res.json(error);
    }
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {
    try {
      // Destructuring info
      const { category } = req.body;
      if(category){
        const categoryID = await Category.findOne({ name: category}) ;
        if(!categoryID) return res.status(404).json({error: 404, message: 'La CATEGORÍA enviada no existe.'});
  
        req.body.category = categoryID._id;
      };

      // Doc to search and update
      const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      }).populate('category');
      // Document existence validation
      if(!doc) return res.status(400).json({error: 404, message: 'El PRODUCTO no existe en el inventario.'});
      // Success response
      return res.status(200).json(doc);

    } catch (error) {
      return res.json(error);
    }
  }

  async destroy(req, res) {
    try {

      // Doc to search and delete
      const doc = await Product.findByIdAndDelete(req.params.id)
      // Document existence validation
      if(!doc) return res.status(400).json({error: 404, message: 'El PRODUCTO no existe en el inventario.'});
      // Succes response
      return res.status(200).json({ message: 'Item removed successfully' });
      
    } catch (error) {
      return res.json(error);
    }
  }

  async view(req, res) {
    return res.json();
  }

  async grid(req, res) {
    return res.json();
  }

  async form(req, res) {
    return res.json();
  }
}

export default new ProductsController();

