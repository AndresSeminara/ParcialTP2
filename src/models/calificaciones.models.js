class CalificacionesModel {
    constructor() {
      this.calificaciones = [
        {
          id: 1,
          nombre: "Lucia",
          nota: 4,
        },
        {
          id: 2,
          nombre: "martin",
          nota: 7,
        },
        {
          id: 3,
          nombre: "jose",
          nota: 10,
        }
      ];
    }
    
    getCalificaciones = async () => {
      return this.calificaciones;
    };
  
    postCalificaciones = async (data) => {
      data.id = this.calificaciones.length + 1;
      await this.calificaciones.push(data);
      return data;
    };

    getCalificacionPorAlumno = async (idAlmuno) => {
        const calificacion = await this.calificaciones.find(data => data.id == idAlmuno);
        return calificacion;
    }
  }
  
  export default CalificacionesModel;