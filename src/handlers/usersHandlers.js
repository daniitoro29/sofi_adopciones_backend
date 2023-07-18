const { createUser, getUserById, deleteUserById, getAllUser, updateUserById } = require('../controllers/usersControllers');


// Crear un usuario
const createUserHandler = async (req, res) => {
    const { Usu_Nombre, Usu_Apellido, Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado } = req.body;
    try {
      if (
        Usu_Nombre.length < 3 || Usu_Apellido.length < 3 || Usu_Telefono.length < 7 || !Usu_Correo || Usu_Contraseña.length < 7 ||!Usu_Genero ||!Usu_Estado ) 
      {
        res.status(400).json({ message: "Datos inválidos o incorrectos" });
      } else {
        const newUser = await createUser(Usu_Nombre, Usu_Apellido, Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado);
        res.json(newUser);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
  

// Traer todos los usuarios
const getUsersHandler = async (req, res) => {
    try {
        const allUser = await getAllUser();
        res.json(allUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

// Eliminar un usuario
const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await deleteUserById(id);
        res.json(deleteUser)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Traer un usuario especifico
const getUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await getUserById(id);
      res.json(user);
  } catch(error){
    res.status(400).json({error: error.message});
  }
};

// Actualizar un usuario
const updateUserHandler = async (req, res) => {
    const { id } = req.params;
    const { Usu_Nombre, Usu_Apellido,Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado} = req.body;
    console.log('Esto es req.body en el backend', req.body);
    try {
    const updateUser = await updateUserById(id, Usu_Nombre, Usu_Apellido,Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado);

    res.send(updateUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}



module.exports = {
  getUserHandler,
  getUsersHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler
};
