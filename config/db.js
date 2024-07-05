import pg from "pg";
const { Pool } = pg;

const config ={
    host: 'localhost',
    user: 'postgres',
    password: "iraldi11",
    database: 'plan_de_viajes',
    port: 5433,
    allowExitOnIdle: true
}

const plan_de_viajes = new Pool(config);

export default plan_de_viajes;