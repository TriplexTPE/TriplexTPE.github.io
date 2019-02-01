---
title: "Fonctionement du site web"
date: "2019-01-31"
---

## Le choix du support

Nous avons recherché un support qui nous permettrait de montrer tous les éléments multimédias - des clips audio de l’entretien, des modèles 3D, des liens vers des sources d’informations - que nous avons créés ou collectionnés pendant notre travail. Un site web nous semblait donc le choix le plus pertinent.

## Gatsby JS
 
Pour ce site web, nous utilisons [Gatsby JS](https://www.gatsbyjs.org/), qui permet de générer des sites web à partir d'une bibliothèque JavaScript, qui peut contenir d'autre langages en plus, tels que [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/Css/), [Markdown](https://daringfireball.net/projects/markdown/), et [GraphQL](https://graphql.org/). Cette configuration, avec une multitude de langages, nous permet un processus idéal pour un travail de groupe.
 
## Une multitude de langages pour un procédé inclusif
 
Nous voyons ici la structuration du site web:
 
<div align="center" style="padding:20px;"><img src="https://i.imgur.com/Ydls5yJ.png"></img></div>
 
On s'intéresse seulement au répertoire 'src', car il comprend tout le contenu du site vu par l'utilisateur. Dedans, il existe 4 répertoires: <ul type="circle">
<li>'components': définit des éléments réutilisables, tels que la barre de navigation</li>
<li>'markdown': définit le contenu des pages, d'une manière facilement lisible par les humains</li>
<li>'pages': attrape les fichiers markdown, grâce au langage GraphQL, et les transforme en instruction lisible par le navigateur - c'est-à-dire en langage HTML et CSS</li>
<li>'utils': définit le style général du site</li>
</ul>

Cette structure spéciale nous permet une méthode de travail compatible avec chaque membre du groupe. Ceux ne connaissant rien en programmation travaillent sur les fichiers markdown et écrivent le vrai contenu du site web. Ceux qui s'y connaissent peuvent changer le formatage et le style du site de manière globale, avec les répertoires 'components' et 'utils'; pas besoin de passer par chaque fichier pour l'éditer. Finalement, toute cette procédure est optimisée grâce au langage GraphQL, qui permet de créer les pages à partir des fichier markdown, de manière automatique.