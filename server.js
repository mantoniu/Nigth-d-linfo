const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Définir le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Définir la route pour renvoyer le fichier index.html
app.get('/', (req, res) => {
    res.sendFile('html/index.html', {root : __dirname});
});

app.get('/index-css', (req, res) => {
    res.sendFile('css/styles.css', {root : __dirname});
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
