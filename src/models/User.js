import mongoose, { Schema } from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      require: true
    },
    roles: [{
      ref: "Role",
      type: Schema.Types.ObjectId
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('User', UserSchema);
