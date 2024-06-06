import express from 'express'
import CalificacionesController from '../controller/calificaciones.controller.js'

class Router {
    constructor(){
        this.router = express.Router();
        this.controller = new CalificacionesController;
    }
    start () {
        this.router.get("/calificaciones", this.controller.getCalificaciones);
        this.router.get("/calificaciones/:id", this.controller.getCalificacionPorAlumno);
        this.router.post("/calificaciones", this.controller.postCalificaciones);
        return this.router
    }

}

export default Router