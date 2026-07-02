const fs = require('fs');
const path = require('path');

const dirToSearch = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components'),
  path.join(__dirname, 'lib')
];

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('bg-[#E76F51]') || content.includes('fill="#E76F51"')) {
    let newContent = content.replace(/bg-\[#E76F51\]/g, 'bg-[#15604E]');
    newContent = newContent.replace(/fill="#E76F51"/g, 'fill="#15604E"');
    fs.writeFileSync(filePath, newContent);
    console.log('Reverted bg/fill in ' + filePath);
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
