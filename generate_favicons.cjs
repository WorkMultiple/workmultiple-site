const fs = require('fs');
const sharp = require('sharp');

async function run() {
    const svgPath = 'public/favicon.svg';
    let svg = fs.readFileSync(svgPath, 'utf8');

    // Fix the original SVG to be White
    if (svg.includes('fill="#000000"')) {
        svg = svg.replace('fill="#000000"', 'fill="#FFFFFF"');
        fs.writeFileSync(svgPath, svg);
    }

    // Generate the standard White + Cyan PNG
    await sharp(svgPath)
        .resize(800, 800)
        .png()
        .toFile('public/WorkMultiple_Logo_800x800.png');
    console.log('Generated Standard (White) PNG');

    // Generate the Twitter Black + Cyan PNG using a buffer
    let blackSvg = svg.replace('fill="#FFFFFF"', 'fill="#000000"');
    await sharp(Buffer.from(blackSvg))
        .resize(800, 800)
        .png()
        .toFile('public/WorkMultiple_Logo_Twitter_800x800.png');
    console.log('Generated Twitter (Black) PNG');
}

run().catch(console.error);
