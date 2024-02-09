const generateLogo = require('./lib/logoGenerator');
const writeSVG = require('./lib/fileWriter');

async function main() {
  try {
    const svgString = await generateLogo();
    writeSVG('logo.svg', svgString);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
