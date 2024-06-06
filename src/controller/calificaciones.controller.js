import CalificacionesServices from '../service/calificaciones.service.js'

class CalificacionesController{
    
    constructor(){
        this.service = new CalificacionesServices;
    }

    getCalificaciones = async (req, res) => {
        const calificaciones = await this.service.getCalificaciones();
        res.send(calificaciones);
    }
    
    postCalificaciones = async (req, res) => {
        const calificacionNueva = req.body;
        const calificaciones = await this.service.postCalificaciones(calificacionNueva);
        res.send(calificaciones);
    }

    getCalificacionPorAlumno = async (req, res) => {
        const { id } = req.params;
        const calificacion = await this.service.getCalificacionPorAlumno(id);
        if (!calificacion) {
            return res.status(404).send("No se encontró ninguna calificación para el alumno con el ID proporcionado.");
        }
        const alumno = calificacion.nombre;
        const nota = calificacion.nota;
        const frase = `¡Hola ${alumno}! Tu nota es ${nota}.`;
        res.send(frase);
      };

}

export default CalificacionesController;