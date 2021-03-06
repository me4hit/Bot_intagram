const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT
const puppeteer = require('puppeteer');
const chromeOptions = {
    headless: false,
    defaultViewport: null,
    args: [
        "--no-sandbox"
    ],
};
app.get('/',async (req, res) => {
    
    const browser = await puppeteer.launch(chromeOptions);
    const page = await browser.newPage();
    await page.goto(req.query.url);
    let img= await page.screenshot({ path: 'example.png' });

    await browser.close();
    res.send(img)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})