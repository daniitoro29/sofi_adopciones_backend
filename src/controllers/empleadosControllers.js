const { Empleado } = require("../db");

// Esta función puede interactuar con el modelo
const createEmpleado = async (Usu_Id, Emp_Cargo
    ) =>  await Empleado.create({Usu_Id, Emp_Cargo});

const getAllEmpleados = async () => await Empleado.findAll();

const deleteEmpleadoById = async(Emp_Id) => await Empleado.destroy({
    where: {
        Emp_Id: Emp_Id,
    }
 })

 const updateEmpleadoById = async (Emp_Id,Emp_Cargo) => {
    const empleadoUpdate = await Empleado.findByPk(Emp_Id);
    empleadoUpdate.Emp_Cargo = Emp_Cargo;
    await empleadoUpdate.save();
    return empleadoUpdate
}

module.exports = { createEmpleado, getAllEmpleados, deleteEmpleadoById, updateEmpleadoById};