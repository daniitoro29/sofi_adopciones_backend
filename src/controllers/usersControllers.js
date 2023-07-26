const { Usuario } = require("../db");

// Esta función puede interactuar con el modelo
const createUser = async (Usu_Nombre,Usu_Apellido,Usu_Telefono,Usu_Correo,Usu_Contraseña,Usu_Genero,Usu_Estado, Rol_Id
    ) =>  await Usuario.create({Usu_Nombre,Usu_Apellido,Usu_Telefono,Usu_Correo,Usu_Contraseña,Usu_Genero,Usu_Estado, Rol_Id});

// Traer todos los usuarios
const getAllUser = async() => await Usuario.findAll();

// Traer un usuario por id
const getUserById = async(id) => {
    const user = await Usuario.findByPk(id);
    return user;
}

// Eliminar un usuario
const deleteUserById = async(Usu_Id) => await Usuario.destroy({
    where: {
        Usu_Id : Usu_Id
    }});

// Actualizar un usuario
const updateUserById = async(id, Usu_Nombre, Usu_Apellido,Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado) => {
    const userUpdate = await Usuario.findByPk(id);
    userUpdate.Usu_Nombre = Usu_Nombre, 
    userUpdate.Usu_Apellido = Usu_Apellido,
    userUpdate.Usu_Telefono = Usu_Telefono, 
    userUpdate.Usu_Correo = Usu_Correo, 
    userUpdate.Usu_Contraseña = Usu_Contraseña, 
    userUpdate.Usu_Genero = Usu_Genero, 
    userUpdate.Usu_Estado = Usu_Estado,
    await userUpdate.save();
    return userUpdate;
}

// Banear un usuario
const banUserById = async (Usu_Id) => {
    try {
      // Buscar el usuario por su ID en la base de datos
      const user = await Usuario.findByPk(Usu_Id);
  
      // Verificar si se encontró el usuario
      if (!user) {
        throw new Error("Usuario no encontrado");
      }
  
      // Cambiar el estado del usuario en función de su estado actual
      const newEstado = user.Usu_Estado === "Activo" ? "Inactivo" : "Activo";
  
      // Actualizar el estado del usuario en la base de datos
      await Usuario.update(
        { Usu_Estado: newEstado },
        {
          where: {
            Usu_Id: Usu_Id,
          },
        }
      );
  
      console.log("Estado del usuario actualizado exitosamente");
    } catch (error) {
      console.error("Error al actualizar el estado del usuario:", error);
      throw error; // Opcional: relanza el error para que pueda ser capturado en la llamada a esta función
    }
  };
  



module.exports = { createUser, getUserById, deleteUserById, getAllUser, updateUserById, banUserById };
