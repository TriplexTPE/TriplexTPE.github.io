(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t);var r=n(8),i=(n(0),n(163),n(154)),a=n(151),o={name:"1js0a47",styles:"background:hsla(0,0%,0%,0.2);"};t.default=function(){return Object(r.b)(i.a,null,Object(r.b)("h1",null,"La vie avec l'ADN à trois brins est-elle possible?"),Object(r.b)("p",null,"Cela est la question que nous nous sommes posé, il y maintenant 4 mois. Ce site web est notre production finale, le résultat de ces mois de recherches."),Object(r.b)("hr",{css:o}),Object(r.b)("div",{class:"row"},Object(r.b)("div",{class:"col-md-4"},Object(r.b)("h2",null,"L'ADN Triplexe"),Object(r.b)("p",null,"Ici, nous vous présentons la majorité de notre recherche, allant des débuts de la théorie d'ADN triplexe, au potentiel future d'une téchnologie triplexe. Il se divise donc en trois sous-parties:"),Object(r.b)("ul",{type:"circle"},Object(r.b)("li",null,Object(r.b)(a.Link,{to:"passe"},"Origines du théorie")),Object(r.b)("li",null,Object(r.b)(a.Link,{to:"aujoudhui"},"Triplexes aujourd'hui")),Object(r.b)("li",null,Object(r.b)(a.Link,{to:"futur"},"Potentiel médical futur")))),Object(r.b)("div",{class:"col-md-4"},Object(r.b)("h2",null,"Entretien"),Object(r.b)("p",null,"Dans le contexte du TPE, nous avions le privilège d'interviewer un expert du ADN triplexe, Prof. Karen Vasquez. Plus d'informations sur Prof. Vasquez, ainsi que des extraits de l'entretien (en anglais) et leurs transcriptions (en français) se trouvent à cette page:"),Object(r.b)("ul",{type:"circle"},Object(r.b)("li",null,Object(r.b)(a.Link,{to:"entretien"},"Entretien")))),Object(r.b)("div",{class:"col-md-4"},Object(r.b)("h2",null,"Démarche"),Object(r.b)("p",null,"Le TPE est avant tout un processus pédagogique de démarche expérimentale. Ainsi, notre démarche est aussi importante que nos résultats. Donc, nous utilisons cette partie pour expliquer notre démarche:"),Object(r.b)("ul",{type:"circle"},Object(r.b)("li",null,Object(r.b)(a.Link,{to:"choix"},"Sujet/Problématique")),Object(r.b)("li",null,Object(r.b)(a.Link,{to:"interdiscipline"},"Interdisciplinarité")),Object(r.b)("li",null,Object(r.b)(a.Link,{to:"site"},"Site web"))))))}},150:function(e,t,n){var r;e.exports=(r=n(152))&&r.default||r},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return j});var r=n(8),i=n(0),a=n.n(i),o=n(4),c=n.n(o),u=n(149),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(150),b=n.n(l);n.d(t,"PageRenderer",function(){return b.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),j=function(e){return Object(r.b)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.b)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}j.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},152:function(e,t,n){"use strict";n.r(t);n(51);var r=n(0),i=n.n(r),a=n(4),o=n.n(a),c=n(52),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,n){e.exports={navbar:"dropdown-module--navbar--2txcB",navbarright:"dropdown-module--navbarright--RhOsZ",dropdown:"dropdown-module--dropdown--1Tt-t",dropbtn:"dropdown-module--dropbtn--1oR1k",dropdowncontent:"dropdown-module--dropdowncontent--1jhMN"}},154:function(e,t,n){"use strict";var r=n(8),i=(n(0),n(151)),a=n(153),o=n.n(a),c=n(155),u=n.n(c),s=n(156),l=n.n(s);l.a.headerColor="#7492BF";var b=new u.a(l.a),d=b.rhythm;t.a=function(e){var t=e.children;return Object(r.b)("div",{css:Object(r.a)("margin:0 auto;max-width:1300px;padding:",d(4),";padding-top:",d(1.5),";")},Object(r.b)("div",{className:o.a.navbar},Object(r.b)(i.Link,{to:"/"},"Accueil"),Object(r.b)("div",{className:o.a.dropdown},Object(r.b)("button",{className:o.a.dropbtn},"Triplexe"),Object(r.b)("div",{className:o.a.dropdowncontent},Object(r.b)(i.Link,{to:"passe"},"Passé"),Object(r.b)(i.Link,{to:"aujourdhui"},"Aujourd'hui"),Object(r.b)(i.Link,{to:"futur"},"Futur"))),Object(r.b)(i.Link,{to:"entretien"},"Entretien"),Object(r.b)("div",{className:o.a.dropdown},Object(r.b)("button",{className:o.a.dropbtn},"Démarche"),Object(r.b)("div",{className:o.a.dropdowncontent},Object(r.b)(i.Link,{to:"choix"},"Sujet/problématique"),Object(r.b)(i.Link,{to:"interdiscipline"},"Interdisciplinarité"),Object(r.b)(i.Link,{to:"site"},"Site web"))),Object(r.b)("div",{className:o.a.navbarright},Object(r.b)(i.Link,{to:"sources"},"Sources"))),t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-b7832384d1de3cd69f4c.js.map