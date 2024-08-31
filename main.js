// ==UserScript==
// @name         Hivemind
// @namespace    http://hivemind.com/
// @version      0.1.0
// @description  Data analyzer for fourmizzz
// @author       William Van Haelst
// @match        http://s4.fourmizzz.fr/
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    const SPREADSHEET_ID = '1912KUGBGzpPKM3t0QpHQJyde0kYK4Qtc1xgX3cc35d8'
    const CLIENT_ID = ''
    const API_KEY = 'AIzaSyCXmK-Auhzwj6XOclM1yViv-3lA4-hJiAc'
    const SCOPE = 'https://www.googleapis.com/v4/spreadsheets'

    const url = `${SCOPE}/${SPREADSHEET_ID}/values/Feuille1!A1:D5?key=${API_KEY}`;
    
    try {
        // Envoyer la requête GET à l'API Google Sheets.
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erreur de requête : ' + response.status);

        // Convertir la réponse en JSON.
        const data = await response.json();

        console.log('Données récupérées depuis Google Sheets :', data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
})();
