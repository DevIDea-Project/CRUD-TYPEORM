import * as express from 'express';
import routes from './routes/New.routes'
import { createConnection } from 'typeorm';

export class App {
  
  private express: express.Application
  private port = 8080;

  constructor(){
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private listen(): void {
    this.express.listen(this.port, () => {
      console.log("Servidor Iniciado na Porta: " + this.port);
    })
  }

  private database(): void {
    createConnection();
  }

  private routes(): void {
    this.express.use('/api', routes)
  }
}
