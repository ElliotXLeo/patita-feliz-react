import React, { Fragment, useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
  if (!citasLocalStorage) {
    citasLocalStorage = [];
  }

  const vet = {
    name: '🐶Patita Felíz🐶',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭',
    comercialActivity: 'Veterinaria'
  }

  const currentDate = new Date().getFullYear();

  const [citas, registrarCitas] = useState(citasLocalStorage);

  useEffect(() => {
    if (citasLocalStorage) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasLocalStorage]);

  const crearCita = (cita) => {
    registrarCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = (id) => {
    const citasRestantes = citas.filter((cita) => {
      return cita.id !== id;
    });
    registrarCitas(citasRestantes);
  }

  const tituloCita = citas.length === 0 ? '🐱Registra tu cita🐱' : '🐤Administrar citas🐤';

  return (
    <Fragment>
      <Header
        vet={vet}
      />

      <main>
        <section className="container">
          <div className="row align-items-start">

            <section className="col-md-5 my-2 mx-auto">
              <div className="row align-items-start animate__animated animate__fadeInUp">
                <div className="container__title">
                  <Formulario
                    crearCita={crearCita}
                  />
                </div>
              </div>
            </section>

            <section className="col-md-5 my-2 mx-auto">
              <div className="row align-items-start animate__animated animate__fadeInUp">
                <div className="container__title">
                  <h2>{tituloCita}</h2>

                  {citas.map((cita) => {
                    return (
                      <Cita
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                      />
                    );
                  })}
                </div>
              </div>
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
