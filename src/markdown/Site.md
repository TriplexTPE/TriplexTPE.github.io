---
title: "Fonctionement du site web"
date: "2019-01-31"
---

## Gatsby JS
 
Pour ce site web, nous utilisons [Gatsby JS](https://www.gatsbyjs.org/), qui permet de générer des site web à partir d'une bibliothèque JavaScript, qui peut contenir d'autre langages en plus, tel [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/Css/), [Markdown](https://daringfireball.net/projects/markdown/), [GraphQL](https://graphql.org/). Cette configuration, avec une multitude de languages, nous permet un processus idéal pour un travail de group.
 
## Une multitude de languages pour un procédé inclusive 
 
Nous voyons ici la structuration du site web:
 
<div align="center" style="padding:20px;"><img src="https://i.imgur.com/Ydls5yJ.png"></img></div>
 
L'on s'interèsse seulement au répertoire 'src', car il comprend tout le contenu du site vu par l'utilisateur. Dedans, il existe 4 répertoires: <ul type="circle">
<li>'components': il définit des élements réutilisables, tel la barre de navigation</li>
<li>'markdown': il définit le contenu des pages, d'un manière facilement lisible pour les humains</li>
<li>'pages': il attrape les fichiers markdown, grâce au langage GraphQL, et les transforme en instruction lisible par le navigateur - c'est-a-dire en language HTML et CSS</li>
<li>'utils': il définit le style général du site</li>
</ul>

Cette structre spéciale nous permet un proces de travail compatible avec chaque membre du groupe. Ce ne connaissant rien en programmation travaillent sur les fichiers markdown et écrivent le vrai contenu du site web. Ce qui ce connaissent peuvent changer le format et le style du site de manière globale, avec les répertoires 'components' et 'utils'; pas besoin de passer par chaque fichier pour l'éditer. Finalement, tout cette procèdure est optimisé grâce au langage GraphQL, qui permet de créer les pages à partir des fichier markdown, de manière automatique.