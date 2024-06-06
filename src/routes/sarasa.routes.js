import express from 'express'
import ProductController from '../controller/sarasa.controller.js'

class Router {
    constructor(){
        this.router = express.Router();
        this.controller = new ProductController
  //      this.controller = //aca va new NOMBREcontroller
    }
    start () {
        //ACA VAN LAS RUTAS PARA LOS ABM
    return this.router
    }

}

export default Router