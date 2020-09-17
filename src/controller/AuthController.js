import User from '../models/User';
import jwt from 'jsonwebtoken';
import Role from '../models/Role';

class AuthController {
  async signUp(req, res) {

    try {
      
      // Destructuring info
      const { name, email, password, roles } = req.body;
      // Validate character length
      if (password.length < 8) {
        return res.status(400).json({error: 400, message: 'La CONTRASEÑA debe de tener al menos 8 caracteres'});
      }

      // New model instance
      const newUser = new User({
        name,
        email,
        password: await User.encryptPassword(password),
      });
      // Assign roles
      if(roles && roles.length > 0){
        const foundRoles = await Role.find({ name: {$in: roles} });
        newUser.roles = foundRoles.map(role => role._id);
      }else{
        const defaultRole = await Role.findOne({ name: 'USER_ROLE' });
        newUser.roles = [defaultRole._id];
      }
      // Save user
      const saveUser = await newUser.save();
      // Create token
      const token = jwt.sign({id: saveUser._id}, 'evan-alain', {
        expiresIn: '24h'
      });
  
      // Success response
      return res.status(200).json({"token": token});
      
    } catch (error) {
      return res.json(error);
    }
  }

  async signIn(req, res) {

    try {
      // Find user
      const userFound = await User.findOne({email: req.body.email}).populate('roles');
      // If the user does not exist
      if(!userFound) throw new Error('No hay usuario registrado con ese email');
      // Check that the password is valid
      const matchPass = await User.comparePassword(req.body.password, userFound.password);
      // If the password does not match
      if(!matchPass) throw new Error('El email o la contraseña son incorrectos');

      // Create token
      const token = jwt.sign({id: userFound._id}, 'evan-alain-login', {
        expiresIn: '24h'
      });

      // Success response
      return res.status(200).json({"token": token});

    } catch (error) {
      // Error response message
      const resMsn = { error: 400, message: error.message};
      // Response
      console.log(resMsn);
      // Error response
      return res.status(400).json(resMsn);
    }

  }
}

export default new AuthController();