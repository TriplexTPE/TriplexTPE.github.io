import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styles from "./dropdown.module.css"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1300px;
      padding: ${rhythm(4)};
      padding-top: ${rhythm(1.5)};
    `}
  >
  <div className={styles.navbar}>
    <Link to={`/`}>Accueil</Link>
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Triplexe</button>
      <div className={styles.dropdowncontent}>
        <Link to={`passe`}>Passé</Link>
        <Link to={`aujourdhui`}>Aujourd'hui</Link>
        <Link to={`futur`}>Futur</Link>
      </div>
    </div> 
    <Link to={`entretien`}>Entretien</Link>
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Démarche</button>
      <div className={styles.dropdowncontent}>
        <Link to={`choix`}>Sujet/problématique</Link>
        <Link to={`interdiscipline`}>Interdisciplinarité</Link>
        <Link to={`site`}>Site web</Link>
      </div>
    </div>
    <div className={styles.navbarright}>
      <Link to={`sources`}>Sources</Link>
    </div>
  </div> 
    {children}
  </div>
)