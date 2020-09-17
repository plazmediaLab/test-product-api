import jwt from 'jsonwebtoken';
import { SECRET_WORD } from '../config';
import User from '../models/User';
import Role from '../models/Role';

/**
 * Verifica existencia de Token en Headers + Validación Signature
 *
 * @param  \jwt
 * @return False -> Error message or True -> Next function
 */
export const verifyToken = (req, res, next) => {

  const token = req.headers["x-access-token"];

  if(!token) return res.status(403).json({error: 403, message: "Access TOKEN not received."});

  jwt.verify(token, SECRET_WORD, async (err, decoded) => {      
    
    if (err) {
      return res.status(401).json({ error: 401, mensaje: 'Token signature inválida.' });    
    }
    
    const decodeInfo = decoded;
    req.id = decodeInfo.id

    const user = await User.findById(req.id);
    if(!user) return res.status(401).json({ error: 404, mensaje: 'Info no found.' });

    next();

  });

};

/**
 * Valida role ADMIN
 *
 * @param  \role
 * @return False -> Error message or True -> Next function
 */
export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.id);
  const roles = await Role.find({_id: {$in: user.roles}});

  for (let i = 0; i < roles.length; i++) {
    if(roles[i].name === 'ADMIN_ROLE'){
      next();
      return
    }
  }

  return res.status(403).json({ error: 403, mensaje: 'Administrator permission is required to perform this action.' });

}

/**
 * Valida role MODERATOR
 *
 * @param  \role
 * @return False -> Error message or True -> Next function
 */
export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.id);
  const roles = await Role.find({_id: {$in: user.roles}});

  for (let i = 0; i < roles.length; i++) {
    if(roles[i].name === 'MODERATOR_ROLE'){
      next();
      return
    }
  }

  return res.status(403).json({ error: 403, mensaje: 'Moderator permission is required to perform this action.' });

}