import React from 'react';

const Cita = ({ cita, eliminarCita }) => {

  const { id, nombreMascota, nombrePropietario, fecha, hora, sintomas } = cita;

  return (
    <section className="cita animate__animated animate__fadeInUp">
      <p> Mascota: <span>{nombreMascota}</span></p>
      <p> Propietario: <span>{nombrePropietario}</span></p>
      <p> Fecha: <span>{fecha}</span></p>
      <p> Hora: <span>{hora}</span></p>
      <p> Síntoma: <span>{sintomas}</span></p>
      <div className="d-grid gap-2">
        <button
          className="btn btn-danger"
          type="submit"
          onClick={() => eliminarCita(id)}
        >🐹 Eliminar Cita 🐹</button>
      </div>
    </section>
  );
}

export default Cita;