import CalificacionesModel from "../models/calificaciones.models.js";


class CalificacionesServices {
    
    constructor(){
        this.model = new CalificacionesModel;
    }
    
    getCalificaciones = async () => {
        const calificaciones = await this.model.getCalificaciones();
        return calificaciones;
    };

    postCalificaciones = async (calificacion) => {
        return await this.model.postCalificaciones(calificacion);
    };

    getCalificacionPorAlumno = async (idAlumno) => {
        return await this.model.getCalificacionPorAlumno(idAlumno);
    }

}

export default CalificacionesServices;