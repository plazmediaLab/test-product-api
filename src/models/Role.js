import mongoose from 'mongoose';

const RoleSchema = mongoose.Schema(
  {
    name: String
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Role', RoleSchema);
