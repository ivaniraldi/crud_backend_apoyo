import plan_de_viajes from "../config/db.js";

const agregarViaje = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)";
  const values = [destino, presupuesto];
  const result = await plan_de_viajes.query(consulta, values);
  console.log("Viaje agregado");
};

const obtenerViaje = async (id) => {
    const consulta = "SELECT * FROM viajes WHERE id = $1"
    const values = [id]
    const result = await plan_de_viajes.query(consulta, values)
    const [viaje] = result.rows
    return viaje
}    

const obtenerViajes = async () => {
  const { rows } = await plan_de_viajes.query("SELECT * FROM viajes");
  return rows;
};

const modificarPresupuesto = async (presupuesto, id) => {
  const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2";
  const values = [presupuesto, id];
  const { rowCount } = await plan_de_viajes.query(consulta, values)
    if (rowCount === 0) {
    throw { code: 404, message: "No se consiguió ningún viaje con este id" }
    }
  const result = await plan_de_viajes.query(consulta, values);
};

const eliminarViaje = async (id) => {
  const consulta = "DELETE FROM viajes WHERE id = $1";
  const values = [id];
  const result = await plan_de_viajes.query(consulta, values);
};

// Equipamento

const agregarEquipamento = async (nombre) => {
  const consulta = "INSERT INTO equipamiento values (DEFAULT, $1)";
  const values = [nombre];
  const result = await plan_de_viajes.query(consulta, values);
  console.log("Equipamiento agregado");
};

const obtenerEquipamento = async () => {
  const { rows } = await plan_de_viajes.query("SELECT * FROM equipamiento");
  return rows;
};

const modificarEquipamento = async (nombre, id) => {
  const consulta = "UPDATE equipamiento SET nombre = $1 WHERE id = $2";
  const values = [nombre, id];

  const result = await plan_de_viajes.query(consulta, values);


};

const eliminarEquipamento = async (id) => {
  const consulta = "DELETE FROM equipamiento WHERE id = $1";
  const values = [id];
  const result = await plan_de_viajes.query(consulta, values);
};

export const models = {
  agregarEquipamento,
  obtenerEquipamento,
  agregarViaje,
  obtenerViajes,
  modificarPresupuesto,
  modificarEquipamento,
  eliminarViaje,
  eliminarEquipamento,
  obtenerViaje
};
