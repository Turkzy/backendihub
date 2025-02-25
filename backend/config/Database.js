import { Sequelize } from "sequelize";

const db = new Sequelize('pihdatabase','root','', {
    host: 'localhost',
    dialect: "mysql"
});

export default db;
