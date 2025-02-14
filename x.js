const fs = require('fs');
const path = require('path');

const textos = [
    "Feliz Cumpleaños Tamiii <3",
];

// Leemos el contenido de la plantilla
const templatePath = path.join(__dirname, 'index.html');
const templateContent = fs.readFileSync(templatePath, { encoding: 'utf-8' });

for (let i = 0; i < textos.length; i++) {
    const element = textos[i];
    const newContent = templateContent.replace('{{TEXT}}', element);
    let filePath

    switch (i) {
        case 0:
            filePath = path.join(__dirname, `preguntita.html`);
            break;
            case 1:
            filePath = path.join(__dirname, `pregunta.html`);
            break;
            case 2:
            filePath = path.join(__dirname, `noches.html`);
            break;
            case 3:
            filePath = path.join(__dirname, `recordatorio.html`);
            break;
            case 3:
            filePath = path.join(__dirname, `perdon.html`);
            break;
    
        default:
            filePath = path.join(__dirname, `index.html`);
            break;
    }
    fs.writeFileSync(filePath, newContent, { encoding: 'utf-8' });
}

console.log("Archivos generados con éxito.");