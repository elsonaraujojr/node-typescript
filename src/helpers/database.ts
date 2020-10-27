const { Client } = require('pg');
import databaseCredential from './config';

class Database {
  constructor(public readonly client = new Client(databaseCredential)) {
    this.connect();
  }

  async connect() {
    try {
      await this.client.connect();
      console.log(`Server running at http://${databaseCredential.hostname}:${databaseCredential.port}/`);
    } catch (err) {
      await this.client.end();
      console.log('Serviço parado, algo de errado ocorreu!');
    }
  }
}
export default new Database().client;
