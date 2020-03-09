import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Scroll from '../components/Scroll';


const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.etudes} · {config.localisation} ·
            <a href={`mailto:${config.email}`}> {config.email}</a>
          </div>
          <p className="lead">
            Etudiant en informatique, actuellement en licence professionnelle DDIM (Design et Developpement de l'Internet Mobile) à l'université de Dijon, et en alternance (Developpeur Android / Java) pour Veolia.
          </p>
          <Scroll type="id" element="autres">
            <a className="btn btn-dark mb-5" href="#autre">
              <i className="fa fa-plus"></i> Plus d'informations
            </a>
          </Scroll>


          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiences professionnelles</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">

              <h3 className="mb-0">Developpeur full-stack</h3>

              <div className="subheading mb-3">Veolia / Aubervilliers</div>

              <p>
                Après mon DUT informatique, j'ai eu l'opportunité d'effectuer ma licence professionnelle DDIM en alternance a Veolia, afin de continuer de developper le projet Demat'OI.
              </p>

              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="subheading mb-3">Projets réalisés</div>
                <ul className="fa-ul mb-0">
                  <li>
                    <i className="fa-li fa fa-square"></i>
                    <b>Demat'OI</b> : Suite du developpement de l'application Android et maintenance.
                  </li>
                  <li>
                    <i className="fa-li fa fa-square"></i>
                    <b>Demat'Usager</b> : Application Android permettant de dematerialiser l'enquète de dotation
                  </li>
                </ul>
              </div>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2019 - Septembre 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">

              <h3 className="mb-0">Developpeur Android</h3>

              <div className="subheading mb-3">Veolia / Aubervilliers</div>

              <p>
                Afin de valider mon DUT informatique, j'ai eu l'opportunité d'effectuer mon stage a Veolia (Aubervilliers) en tant que developpeur Android.
              </p>

              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="subheading mb-3">Projets réalisés</div>
                <ul className="fa-ul mb-0">
                  <li>
                    <i className="fa-li fa fa-square"></i>
                    <b>Demat'OI</b> : Demarrage du développement du projet <em>Demat'OI</em> permettant la dematerialisation des ordres d'interventions de bac a déchets, a destination des operateurs Veolia.
                  </li>
                </ul>
              </div>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mars 2019 - Juillet 2019</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Etudes</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Université de Dijon</h3>
              <div className="subheading mb-3">Licence professionnelle DDIM (alternance)</div>
              <div>Design et Developpement de l'Internet Mobile / Developpeur Android a Veolia</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2019 - Septembre 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Université de Dijon</h3>
              <div className="subheading mb-3">DUT Informatique</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2017 - Juillet 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lycée privé Notre Dame de Sion (Evry)</h3>
              <div className="subheading mb-3">Bac technologique STI2D (Option EE)</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2015 - Juillet 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Compétences informatiques</h2>

          <div className="subheading mb-3">Languages informatiques</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-apple"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-adobe"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Autres</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-square"></i>
              C#, C++, C
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
              Adobe Premiere Pro, Photoshop, Lightroom, After Effect, XD, Illustrator
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
              Developpement Ionic, React Native
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
              Git, Trello
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
              Suite Office (Word, PowerPoint, Excel, Access)
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
              Jetbrains IDE (IDEAJ, WebStorm, PyCharm)
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="autres"
      >
        <div className="w-100">
        <div className="lead mb-5">
        <h2 className="mb-5">Autres informations a mon propos</h2>
          <ul className="fa-ul">
          <li>
              <div className="badge badge-secondary text-wrap"><i className="fa-li fa fa-flag text-primary"></i>Anglais B2</div>
            </li>
            <li>
              <div className="badge badge-secondary text-wrap"><i className="fa-li fa fa-car text-primary"></i>Possède le permis B</div>
            </li>
            <li>
          <div className="badge badge-secondary text-wrap"><i className="fa-li fa fa-map-pin text-primary"></i>Situé sur {config.habite}</div>
            </li>
          </ul>
        </div>
          <div className="lead mb-5">
          <h2 className="mb-5">Centres d'interets</h2>
          <ul className="fa-ul">
            <li>
              <i className="fa-li fa fa-play text-primary"></i>Esport et jeux vidéos            
            </li>
            <li>
              <i className="fa-li fa fa-running text-primary"></i>Sport            
            </li>
            <li>
              
            </li>
            <li>
              <i className="fa-li fa fa-music text-primary"></i>Musique
            </li>
            <li>
              <i className="fa-li fa fa-video text-primary"></i>Cinema et création multimédia
            </li>
            <li>
              <i className="fa-li fa fa-microchip text-primary"></i>Nouvelles technologies
            </li>
          </ul>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
