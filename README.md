# Starter Kit HTML by thibaultlenoble

Ceci est un starter kit HTML, Sass, js. Il fonctionne avec Gulp + BrowserSync.

Gulp va servir à auto-compiler vos fichiers scss en css ainsi que vos scripts js.
BrowserSync met en place un auto-reload de votre projet dans votre navigateur.

## Structure du projet

* index.html
* gulpfile.js
* README.md
* .gitignore
* assets
  * font
  * img
  * scss
    * base (contient les variables, abstracts, etc..)
    * components (contient les différents composants que vous développerez comme les form, les tables etc..)
    * layout 
    * pages
    * themes (contient les styles spécifique à un thème en particulier)
    * utils (contient des éléments utiles comme les mixins, le normalize etc..)
    * vendors
    * app.scss
  * js
    * app.js

## Installation 

Avant de pouvoir utiliser gulp vous devez installer les packages nécessaire avec la commande :

```
yarn add gulp gulp-sass sass gulp-postcss cssnano gulp-terser browser-sync postcss
```

Vous pouvez ensuite modifier le `gulpfile.js` pour changer le dossier où les fichiers seront compilés :

Pour le css :
```
.pipe(dest('public/assets/css', {sourcemaps: '.'}))
```

Pour le js :
```
.pipe(dest('public/assets/js', {sourcemaps: '.'}))
```


