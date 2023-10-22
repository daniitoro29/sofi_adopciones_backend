const { Usuario } = require("../db");

// Esta función puede interactuar con el modelo
const createUser = async (Rol_Id, Usu_Nombre,Usu_Apellido,Usu_Telefono,Usu_Correo,Usu_Contraseña,Usu_Genero,Usu_Estado
    ) =>  await Usuario.create({ Rol_Id, Usu_Nombre,Usu_Apellido,Usu_Telefono,Usu_Correo,Usu_Contraseña,Usu_Genero,Usu_Estado});

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

module.exports = { createUser, getUserById, deleteUserById, getAllUser, updateUserById };
