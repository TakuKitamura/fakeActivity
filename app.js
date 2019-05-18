const puppeteer = require('puppeteer');


(async () => {
  console.log("start!")
  const fortune = require('fortune-teller')
  const googleAddr = "Googleメールアドレス"
  const googlePasswd = "Googleパスワード"
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 2000
  });


  await page.goto('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  await page.type('input[type="email"]', googleAddr);
  await page.waitFor(1000)
  await page.keyboard.press('Enter');
  await page.waitFor(1000)
  await page.type('input[type="password"]', googlePasswd);
  await page.waitFor(1000)
  await page.screenshot({
    "path": "./sample1.jpg"
  });
  await page.waitFor(1000)
  await page.keyboard.press('Enter');
  await page.waitFor(1000)
  await page.screenshot({
    "path": "./sample2.jpg"
  });
  await page.waitFor(1000)


  for (let i = 0; i < 3; i++) {
    const randomText = fortune.fortune();
    console.log("Google Search -> " + randomText)
    await page.goto("https://www.google.com");
    await page.waitFor(1000)
    await page.screenshot({
      "path": "./" + i + "_sample3.jpg"
    });

    await page.type('input[type="text"]', randomText);
    await page.waitFor(1000)
    await page.keyboard.press('Enter');
    await page.waitFor(1000)
    await page.screenshot({
      "path": "./" + i + "_sample4.jpg"
    });
    await page.waitFor(1000)
    await page.goto("https://myactivity.google.com/item?restrict=waa&hl=ja&utm_source=udc&utm_medium=r&utm_campaign=");
    await page.waitFor(1000)
    await page.screenshot({
      "path": "./" + i + "_sample5.jpg"
    });
  }
  console.log("Done!")
  process.exit(0)

})();