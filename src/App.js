import { Fragment } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const vet = {
    name: 'Patita Felíz',
    slogan: 'Porque es parte de nuestra familia, lo cuidamos.',
    comercialActivity: 'Veterinaria'
  }

  const currentDate = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        vet={vet}
      />

      <main>
        <section className="container">
          <div className="row align-items-start">

            <section className="col-md-6 my-2">
              <div className="row align-items-start animate__animated animate__fadeInUp">
                <div className="container__title">
                  <h2>Formulario</h2>
                </div>
              </div>
            </section>

            <section className="col-md-6 my-2">
              <div className="row align-items-start animate__animated animate__fadeInUp">
                <div className="container__title">
                  <h2>Citas</h2>
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
