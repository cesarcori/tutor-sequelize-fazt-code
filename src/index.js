import app from "./app.js";
import {sequelize} from './database/database.js'

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const puerto = 5001
    app.listen(puerto)
    console.log("Server esta escuchando on", puerto)    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main()
