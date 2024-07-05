import { models } from "../models/queries.js";

const reportarConsulta = async (req, res, next) => {
    const parametros = req.params
    const url = req.url
    console.log(`
    Hoy ${new Date()}
    Se ha recibido una consulta en la ruta ${url}
    con los parámetros:
    `, parametros)
    next()
}
    



const getViajes = async (req, res) => {
  const viajes = await models.obtenerViajes();
  res.json(viajes);
};

const postViaje = async (req, res) => {

    try {
        const { destino, presupuesto } = req.body;
        await models.agregarViaje(destino, presupuesto);
        res.send("Viaje agregado con éxito");
        
    } catch (error) {
        const { code } = error
        if (code == "23502") {
        res.status(400)
        .send("Se ha violado la restricción NOT NULL en uno de los campos de la tabla")
        } else {
        res.status(500).send(error)
        }
        
    }
};
const modificarPresupuesto = async (req, res) => {
  const { id } = req.params;
  const { presupuesto } = req.query;

  try {
      await models.modificarPresupuesto(presupuesto, id);
      res.send("Presupuesto modificado con éxito");
    
  } catch ({ code, message }) {
    res.status(code).send(message)
  }
};

const eliminarViaje = async (req, res) => {
  const { id } = req.params;
  await models.eliminarViaje(id);
  res.send("Viaje eliminado con éxito");
};

const getViajePorID = async (req, res) => {
    const { id } = req.params
    const viaje = await models.obtenerViaje(id)
    res.json(viaje)
}

///Equipamentos:

const getEquipamento = async (req, res) => {
  const equipamentos = await models.obtenerEquipamento();
  res.json(equipamentos);
};

const postEquipamento = async (req, res) => {

try {

    const { nombre } = req.body;
    await models.agregarEquipamento(nombre);
    res.send("Equipamento agregado con éxito");
    
} catch (error) {
    const { code } = error
    if (code == "23502") {
    res.status(400)
    .send("Se ha violado la restricción NOT NULL en uno de los campos de la tabla")
    } else {
    res.status(500).send(error)
    }
    
}
};

const modificarEquipamento = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.query;
  await models.modificarEquipamento(nombre, id);
  res.send("Equipamento modificado con éxito");
};

const eliminarEquipamento = async (req, res) => {
    const { id } = req.params;
    await models.eliminarEquipamento(id);
    res.send("Equipamento eliminado con éxito");
  };

export const controllers = {
  getViajes,
  postViaje,
  modificarPresupuesto,
  getEquipamento,
  postEquipamento,
  modificarEquipamento,
  eliminarViaje,
  eliminarEquipamento,
  getViajePorID,
  reportarConsulta
};
