import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export default () =>  
  <Layout>
  <h1>La vie avec l'ADN à trois brins est-elle possible?</h1>
  <p>Cela est la question que nous nous sommes posé, il y maintenant 4 mois. Ce site web est notre production finale, le résultat de ces mois de recherches.</p>
  
  <hr
    css={css`
      background: hsla(0, 0%, 0%, 0.2);
    `}
  ></hr>
  <div class="row">
      <div class="col-md-4">
        <h2>L'ADN Triplexe</h2>
        <p>Ici, nous vous présentons la majorité de notre recherche, allant des débuts de la théorie d'ADN triplexe, au potentiel future d'une téchnologie triplexe. Il se divise donc en trois sous-parties:</p>
        <ul type="circle">
          <li><Link to={`passe`}>Origines du théorie</Link></li>
          <li><Link to={`aujoudhui`}>Triplexes aujourd'hui</Link></li>
          <li><Link to={`futur`}>Potentiel médical futur</Link></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h2>Entretien</h2>
        <p>Dans le contexte du TPE, nous avions le privilège d'interviewer un expert du ADN triplexe, Prof. Karen Vasquez. Plus d'informations sur Prof. Vasquez, ainsi que des extraits de l'entretien (en anglais) et leurs transcriptions (en français) se trouvent à cette page:</p>
        <ul type="circle">
          <li><Link to={`entretien`}>Entretien</Link></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h2>Démarche</h2>
        <p>Le TPE est avant tout un processus pédagogique de démarche expérimentale. Ainsi, notre démarche est aussi importante que nos résultats. Donc, nous utilisons cette partie pour expliquer notre démarche:</p>
          <ul type="circle">
            <li><Link to={`choix`}>Sujet/Problématique</Link></li>
            <li><Link to={`interdiscipline`}>Interdisciplinarité</Link></li>
            <li><Link to={`site`}>Site web</Link></li>
          </ul>
      </div>
    </div>
  </Layout>