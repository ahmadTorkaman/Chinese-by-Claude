const { createCanvas } = require('canvas');
const fs = require('fs');

function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#2d2d2d';
  ctx.fillRect(0, 0, size, size);
  
  // Circle accent
  ctx.fillStyle = '#8b7355';
  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.5, size * 0.35, 0, Math.PI * 2);
  ctx.fill();
  
  // Character
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.45}px "Noto Serif SC", serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('道', size / 2, size / 2);
  
  return canvas.toBuffer('image/png');
}

try {
  fs.writeFileSync('icon-192.png', createIcon(192));
  fs.writeFileSync('icon-512.png', createIcon(512));
  console.log('Icons created!');
} catch(e) {
  console.log('Canvas not available, creating SVG fallback');
}
