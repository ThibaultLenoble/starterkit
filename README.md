# Starter Kit HTML by thibaultlenoble

Ceci est un starter kit HTML, Sass, js. Il fonctionne avec Gulp + BrowserSync.

Gulp va servir à auto-compiler vos fichiers scss en css ainsi que vos scripts js.
BrowserSync met en place un auto-reload de votre projet dans votre navigateur.

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


