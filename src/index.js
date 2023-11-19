import app from "./app.js";
import {sequelize} from './database/database.js'

import './models/Project.js'

async function main() {
  try {
    await sequelize.sync({force: true});
    // await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const puerto = 4000
    app.listen(puerto)
    console.log("Server esta escuchando on", puerto)    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} 

main()
