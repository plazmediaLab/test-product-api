import jwt from 'jsonwebtoken';
import { SECRET_WORD } from '../config';
import User from '../models/User';

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if(!token) return res.status(403).json({error: 403, message: "Access TOKEN not received"});

  jwt.verify(token, SECRET_WORD, async (err, decoded) => {      
    
    if (err) {
      return res.status(401).json({ error: 401, mensaje: 'Token signature inválida' });    
    }
    
    const decodeInfo = decoded;

    const user = await User.findById(decodeInfo.id);
    if(!user) return res.status(401).json({ error: 404, mensaje: 'Info no found' });

    next();

  });

};