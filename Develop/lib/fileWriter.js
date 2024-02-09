const fs = require('fs');

function writeSVG(filename, svgString) {
  fs.writeFileSync(filename, svgString);
}

module.exports = writeSVG;