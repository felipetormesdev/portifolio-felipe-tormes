const puppeteer = require('puppeteer');
const path = require('path');

async function generateThumb(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: outputPath });
  await browser.close();
  console.log(`Miniatura salva em ${outputPath}`);
}

// Gera miniatura do Dashboard React
(async () => {
  console.log("Certifique-se de que o Dashboard React está rodando em http://localhost:3000");
  await generateThumb('http://localhost:3000', 'dashboard-corrida/thumb.png');
})();
