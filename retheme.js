const fs = require('fs');
const path = require('path');

const dirToSearch = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components'),
  path.join(__dirname, 'lib')
];

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('#15604E')) {
    const newContent = content.replace(/#15604E/g, '#E76F51');
    fs.writeFileSync(filePath, newContent);
    console.log('Replaced in ' + filePath);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

dirToSearch.forEach(traverse);
