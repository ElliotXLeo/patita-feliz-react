import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {

  const [cita, actualizarCita] = useState({
    nombreMascota: '',
    nombrePropietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.id]: e.target.value
    })
  }

  const { nombreMascota, nombrePropietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();
    if (nombreMascota.trim() === '' || nombrePropietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    cita.id = uuid();

    crearCita(cita);

    actualizarCita({
      nombreMascota: '',
      nombrePropietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  }

  return (
    <Fragment>
      <h3>🐱Generar Cita🐱</h3>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form
        className="my-3"
        onSubmit={submitCita}
      >
        <div className="mb-3">
          <label htmlFor="nombreMascota" className="form-label">Nombre de la mascota</label>
          <input
            type="text"
            className="form-control"
            id="nombreMascota"
            aria-describedby="textHelp"
            placeholder="Nombre de la mascota"
            required
            onChange={actualizarState}
            value={nombreMascota}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombrePropietario" className="form-label">Nombre del propietario</label>
          <input
            type="text"
            className="form-control"
            id="nombrePropietario"
            aria-describedby="textHelp"
            placeholder="Nombre del propietario"
            required
            onChange={actualizarState}
            value={nombrePropietario}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            aria-describedby="textHelp"
            required
            onChange={actualizarState}
            value={fecha}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hora" className="form-label">Hora</label>
          <input
            type="time"
            className="form-control"
            id="hora"
            aria-describedby="textHelp"
            required
            onChange={actualizarState}
            value={hora}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sintomas" className="form-label">Síntomas</label>
          <input
            type="text"
            className="form-control"
            id="sintomas"
            aria-describedby="textHelp"
            placeholder="Síntomas"
            required
            onChange={actualizarState}
            value={sintomas}
          />
        </div>

        <div className="d-grid gap-2 my-4">
          <button className="btn btn-warning" type="submit">🐰 Registrar Cita 🐰</button>
        </div>
      </form>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;
