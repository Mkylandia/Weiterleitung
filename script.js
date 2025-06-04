// Beispiel: Logge eine Nachricht in die Konsole, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
    console.log('Die Webseite wurde vollständig geladen!');

    // Optional: Füge einen Event-Listener zum Weiterleitungsbutton hinzu
    const redirectButton = document.getElementById('redirectButton');
    if (redirectButton) {
        redirectButton.addEventListener('click', (event) => {
            // Dies ist nur ein Beispiel, da die Weiterleitung bereits im href des Ankers ist
            // Du könntest hier komplexere Logik hinzufügen, wenn nötig
            console.log('Weiterleitungsbutton geklickt!');
        });
    }
});
