import User from '../models/Products';

class AuthController {
  async signUp(req, res) {

    // TODO · Me quede en la parte de cifrar el password 09/15/2020 
    const { username, email, password, roles } = req.body;

    new User 

    return res.json('Sign Up');
  }

  async signIn(req, res) {
    return res.json('Sign In');
  }
}

export default new AuthController();
