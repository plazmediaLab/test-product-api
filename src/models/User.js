import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validation'
import bcrypt from 'bcryptjs';

const ValidRoles = {
  values: ['USER_ROLE', 'NODERATOR_ROLE', 'ADMIN_ROLE'],
  message: '{VALUE} no es un valor de ROL valido.'
};
const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: 'El NOMBRE es requerido.',
      trim: true
    },
    email: {
      type: String,
      required: [true, 'El EMAIL es requerido.'],
      unique: '{PATH} tiene que ser único, ya existe otro registro con el mismo valor.',
      trim: true,
      validate: [validateEmail, 'Introdusca un CORREO electrónico valido.'], 
    },
    password: {
      type: String,
      required: [true, 'La CONTRASEÑA es requerida.'],
      require: true,
      hide: true, 
    },
    roles: [{
      ref: "Role",
      type: Schema.Types.ObjectId,
    }],
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (password, recivePassword) => {
  return await bcrypt.compare(password, recivePassword);
};

UserSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();

  delete userObject.password;

  return userObject;
}

UserSchema.plugin(uniqueValidator);

export default mongoose.model('User', UserSchema);
