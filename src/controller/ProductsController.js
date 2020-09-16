import Product from '../models/Products';

class ProductsController {
  async store(req, res) {

    const { name, category, price, imgURL } = req.body;

    const newDoc = new Product({
      name,
      category,
      price,
      imgURL
    });

    const doc = await newDoc.save();

    return res.status(201).json(doc); 
  }

  async index(req, res) {

    const docs = await Product.find();
    
    return res.status(200).json(docs);
  }

  async create(req, res) {
    return res.json();
  }

  async show(req, res) {

    const doc = await Product.findById(req.params.id);
    
    return res.status(200).json(doc);
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {

    const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.status(200).json(doc);
  }

  async destroy(req, res) {
    const doc = await Product.findByIdAndDelete(req.params.id)

    return res.status(204).json(doc);
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

