import Product from '../models/Products';

class ProductsController {
  async store(req, res) {

    try {
      // Destructuring info
      const { name, category, price, imgURL } = req.body;
      // New model instance
      const newDoc = new Product({
        name,
        category,
        price,
        imgURL
      });
      // Create doc
      const doc = await newDoc.save();
      // Response
      return res.status(201).json(doc); 

    } catch (error) {
      // Error response message
      const resMsn = { error: 409, message: error.message};
      // Response
      console.log(resMsn);
      return res.status(409).json(resMsn);
    }
  }

  async index(req, res) {
    try {
      // Search docs on DB
      const docs = await Product.find();
      // Success response
      return res.status(200).json(docs);
    } catch (error) {
      // Error response message
      const resMsn = { error: 404, message: error.message};
      // Response
      console.log(resMsn);
      return res.status(404).json(resMsn);
    }
  }

  async create(req, res) {
    return res.json();
  }

  async show(req, res) {
    try {

      // Doc to search
      const doc = await Product.findById(req.params.id);
      // Document existence validation
      if(!doc){
        throw new Error('Item no encontrado en la base de datos');
      }
      // Success response
      return res.status(200).json(doc);
      
    } catch (error) {
      // Error response message
      const resMsn = { error: 404, message: error.message};
      // Response
      console.log(resMsn);
      return res.status(404).json(resMsn);
    }
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {
    try {

      // Doc to search and update
      const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      // Document existence validation
      if(!doc){
        throw new Error('Item no encontrado en la base de datos');
      }
      // Success response
      return res.status(200).json(doc);

    } catch (error) {
      // Error response message
      const resMsn = { error: 404, message: error.message};
      // Response
      console.log(resMsn);
      return res.status(404).json(resMsn);
    }
  }

  async destroy(req, res) {
    try {

      // Doc to search and delete
      const doc = await Product.findByIdAndDelete(req.params.id)
      // Document existence validation
      if(!doc){
        throw new Error('Item no encontrado en la base de datos');
      }
      // Succes response
      return res.status(200).json({ message: 'Item removed successfully' });
      
    } catch (error) {
      // Error response message
      const resMsn = { error: 404, message: error.message};
      // Response
      console.log(resMsn);
      return res.status(404).json(resMsn);
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

