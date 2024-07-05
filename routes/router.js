import express from "express";
import { controllers } from "../controllers/controller.js";

const router = express.Router();


///RUTAS DE LOS VIAJES
router.get("/viajes",controllers.reportarConsulta , controllers.getViajes);

router.get("/viajes/:id", controllers.reportarConsulta ,controllers.getViajePorID);

router.post("/viajes", controllers.postViaje);

router.put("/viajes/:id", controllers.reportarConsulta, controllers.modificarPresupuesto);

router.delete("/viajes/:id", controllers.eliminarViaje);

///RUTAS DE LOS EQUIPAMENTOS
router.get("/equipamento", controllers.getEquipamento);

router.post("/equipamento", controllers.postEquipamento);

router.put("/equipamento/:id", controllers.modificarEquipamento);

router.delete("/equipamento/:id", controllers.eliminarEquipamento);
export default router