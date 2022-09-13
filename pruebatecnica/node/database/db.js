import { Sequelize } from "sequelize";

const db = new Sequelize ('mp', 'root', 'abc123',{
    host:'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }

} )

export default db