import Swal from 'sweetalert2';

const AppointmentsAppointment = ({ appointment, readAppointment, deleteAppointment }) => {

  const { _id, mascota, propietario, fecha, hora, sintomas } = appointment;
  const urlWhatsapp = 'https://wa.me/51997045329?text=Confirmo%20mi%20cita: ';

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAppointment(_id);
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'La cita ha sido eliminada.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'Tu cita se mantiene :)',
          'error'
        );
      }
    });
  };

  return (
    <li
      className="d-flex flex-column gap-2 list-group-item list-group-item-action p-3 animate__animated animate__fadeInUp"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0"><span className="fw-bolder">Mascota:</span> {mascota}</h5>
        <small className="badge bg-primary rounded-pill"><i class="bi bi-calendar"></i> {fecha} <i class="bi bi-clock"></i> {hora}</small>
      </div>
      <p className="m-0"><span className="fw-bolder">Síntomas:</span> {sintomas}</p>
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="m-0"><span className="fw-bolder">Propietario:</span> {propietario}</h6>
        <div className="d-flex gap-1">
          <a
            href={`${urlWhatsapp} Mascota: ${mascota}, Propietario: ${propietario}, Fecha: ${fecha}, Hora: ${hora} Síntomas: ${sintomas}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <i class="bi bi-check-circle"></i>
          </a>
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => readAppointment(_id)}
          >
            <i class="bi bi-pencil"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(_id)}
          >
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default AppointmentsAppointment;