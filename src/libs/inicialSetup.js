import Category from '../models/Category';
import Role from '../models/Role';

export const RoleSeeder = async () => {
  try {

    const CountRoles = await Role.estimatedDocumentCount();
    if(CountRoles > 0) return
    
    const Seeder = await Promise.all([
      new Role({ name: 'USER_ROLE' }).save(),
      new Role({ name: 'MODERATOR_ROLE' }).save(),
      new Role({ name: 'ADMIN_ROLE' }).save()
    ]);

    console.log({Roles: Seeder});
    
  } catch (error) {
    console.log(error);
  }
};

export const CategorySeeder = async () => {
  try {

    const CountCategories = await Category.estimatedDocumentCount();
    if(CountCategories > 0) return;
    
    const Seeder = await Promise.all([
      new Category({ name: 'ELECTRÓNICOS' }).save(),
      new Category({ name: 'ROPA' }).save(),
      new Category({ name: 'CALZADO' }).save(),
      new Category({ name: 'MUJER' }).save(),
      new Category({ name: 'HOMBRE' }).save(),
      new Category({ name: 'NIÑO' }).save(),
      new Category({ name: 'NIÑA' }).save(),
      new Category({ name: 'COMPUTO' }).save(),
      new Category({ name: 'NUEBLES' }).save(),
      new Category({ name: 'VEÌCULOS' }).save(),
    ]);
    
    console.log({Categories: Seeder});
    
  } catch (error) {
    console.log(error);
  }
};