import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

  const { id, nombreMascota, nombrePropietario, fecha, hora, sintomas } = cita;

  let citaWhatsApp = 'https://api.whatsapp.com/send?phone=51997045329&text=Confirmo%20mi%20cita: ';

  return (
    <section className="cita animate__animated animate__fadeInUp">
      <p> Mascota: <span>{nombreMascota}</span></p>
      <p> Propietario: <span>{nombrePropietario}</span></p>
      <p> Fecha: <span>{fecha}</span></p>
      <p> Hora: <span>{hora}</span></p>
      <p> Síntoma: <span>{sintomas}</span></p>
      <div className="d-grid gap-2">
        <a
          href={citaWhatsApp += `Mascota: ${nombreMascota}, Dueño: ${nombrePropietario}, Fecha: ${fecha}, Hora: ${hora}, Síntomas: ${sintomas}.`}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer">🦄 Confirmar Cita 🦄</a>
        <button
          className="btn btn-danger"
          type="submit"
          onClick={() => eliminarCita(id)}
        >🐹 Eliminar Cita 🐹</button>
      </div>
    </section>
  );
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default Cita;