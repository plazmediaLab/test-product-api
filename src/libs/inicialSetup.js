import Role from '../models/Role';

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
  
    if(count > 0) return;
  
    const values = await Promise.all([
      new Role({ name: 'USER_ROLE' }).save(),
      new Role({ name: 'MODERATOR_ROLE' }).save(),
      new Role({ name: 'ADMIN_ROLE' }).save()
    ]);
  
    console.log(values);
  } catch (error) {
    console.log(error);
  }
}