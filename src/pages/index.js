import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Scroll from '../components/Scroll';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

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
              <i className="fa fa-plus"></i> Lire plus
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
        className="resume-section p-3 p-lg-5 d-flex justify-items-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiences professionnelles</h2>

          <Timeline lineColor={'#ddd'}>
            <TimelineItem
              key="001"
              dateText="09/2019 – Actuellement"
              style={{ color: 'black' }}
              dateInnerStyle={{ background: '#343A40', color: 'white' }}
              bodyContainerStyle={{
                padding: '15px',
                borderRadius: '12px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              >
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">

                <h3 className="mb-0">Developpeur full-stack <span class="badge badge-pill badge-secondary">Alternance</span></h3>

                <div className="subheading">Veolia / Aubervilliers </div>

                <p>
                  Après mon DUT informatique, j'ai eu l'opportunité d'effectuer ma licence professionnelle DDIM en alternance à Veolia, afin de continuer de developper le projet Demat'OI.
                </p>

                <div className="shadow-lg p-3 mb-5 bg-dark text-white rounded">
                  <div className="subheading mb-3">Projets réalisés :</div>
                  <ul className="fa-ul mb-0 p-1">
                    <li className="mb-3">
                      <i className="fa-li fa fa-square"></i>
                      <b>Demat'OI</b> : Suite du developpement de l'application Android, maintenance et optimisation en agilité.
                    </li>
                    <li>
                      <i className="fa-li fa fa-square"></i>
                      <b>Demat'Usager</b> : Application Android permettant de dematerialiser l'enquète de dotation des usagers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TimelineItem>

            <TimelineItem
              key="002"
              dateText="03/2019 – 07/2019"
              dateInnerStyle={{ background: '#343A40', color: 'white' }}
              bodyContainerStyle={{
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 4rem 0 rgba(0, 0, 0, 0.2)',
              }}>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">

                  <h3 className="mb-0">Developpeur Android <span class="badge badge-pill badge-secondary">Stage</span> </h3>

                  <div className="subheading mb-3">Veolia / Aubervilliers </div>

                  <p>
                    Afin de valider mon DUT informatique, j'ai pu effectuer mon stage de fin d'études à Veolia (Aubervilliers). J'ai eu comme mission de debuter le developpement d'une application Android, entamant le projet Demat'OI.
                  </p>

                  <div className="shadow-lg p-3 mb-5 bg-dark text-white rounded">
                    <div className="subheading mb-3">Projets réalisés :</div>
                    <ul className="fa-ul mb-0 p-1">
                      <li className="">
                        <i className="fa-li fa fa-square"></i>
                        <b>Demat'OI</b> : Projet <em>Demat'OI</em> permettant la dematerialisation des ordres d'interventions de bacs à déchets, à destination des intervenants Veolia.
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </TimelineItem>
          </Timeline>
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
              <h3 className="mb-0"> Licence professionnelle DDIM (formation en alternance) </h3>
              <span class="badge badge-pill badge-primary">BAC + 3</span>
              <div className="subheading mb-3">Université de Dijon / Veolia Aubervilliers</div>
              <div className="subheading mb-3"></div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2019 - Septembre 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">DUT Informatique</h3>
              <span class="badge badge-pill badge-secondary">BAC + 2</span>
              <div className="subheading mb-3">Université de Dijon</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2017 - Juillet 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bac technologique STI2D (Option EE)</h3>
              <span class="badge badge-pill badge-secondary">BAC</span>
              <div className="subheading mb-3">Lycée privé Notre Dame de Sion (Evry)</div>
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

          <div className="subheading mb-3">Principaux langages et outils informatiques</div>
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
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-adobe"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Autres</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-square"></i>
                <strong>Autres langages</strong> : C#, C++, C, Pascal
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
                <strong>Maitrise de differents IDE</strong> : IDEAJ, WebStorm, PyCharm, VSCode, DataGrip, Visual Studio
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
                <strong>Maitrise de differents logiciels Adobe</strong> : Premiere Pro, Photoshop, Lightroom, After Effect, XD, Illustrator
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
              <strong>Developpement mobile</strong> : Ionic, React Native, Android (Java/Kotlin), iOS (Swift)
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
                <strong>Utilisation des outils d'équipes</strong> : Git, Trello
            </li>
            <li>
              <i className="fa-li fa fa-square"></i>
                <strong>Maitrise de la suite Office</strong> : Word, PowerPoint, Excel, Access...
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
        <h2 className="mb-5">Autres informations à mon propos</h2>
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
