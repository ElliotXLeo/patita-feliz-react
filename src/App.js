import React, { Fragment, useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

import Swal from 'sweetalert2';

function App() {

  let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
  if (!citasLocalStorage) {
    citasLocalStorage = [];
  }

  const vet = {
    name: '🐶Patita Feliz🐶',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭',
    comercialActivity: 'Veterinaria'
  }

  const currentDate = new Date().getFullYear();

  const [citas, registrarCitas] = useState(citasLocalStorage);

  useEffect(() => {
    let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
    if (citasLocalStorage) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita) => {
    registrarCitas([
      ...citas,
      cita
    ]);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Cita registrada!',
      showConfirmButton: false,
      timer: 4000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  const eliminarCita = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Estás segur@?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const citasRestantes = citas.filter((cita) => {
          return cita.id !== id;
        });
        registrarCitas(citasRestantes);
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Ha sido eliminado.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelad@',
          'Está seguro :)',
          'error'
        );
      }
    });
  }

  const tituloCita = citas.length === 0 ? '🐤Registra tu cita🐤' : '🐤Administrar citas🐤';

  return (
    <Fragment>
      <Header
        vet={vet}
      />

      <main>
        <section className="container">
          <div className="row align-items-start justify-content-center animate__animated animate__fadeInUp">
            <section className="col-md-5 my-2">
              <Formulario
                crearCita={crearCita}
              />
            </section>

            <section className="col-md-5 my-2">
              <h3>{tituloCita}</h3> 
              {citas.map((cita) => {
                return (
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                );
              })}
            </section>
          </div>
        </section>
      </main>

      <Footer
        currentDate={currentDate}
      />
    </Fragment>
  );
}

export default App;
