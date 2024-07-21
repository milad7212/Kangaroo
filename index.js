console.log("3333", 3333);
import puppeteer from "puppeteer";

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  try {
    await page.goto("https://ve.cbi.ir/TasRequest.aspx", {
      waitUntil: "networkidle2",
      timeout: 60000,
    });
  } catch (error) {
    console.error("خطا در بارگیری صفحه:", error);
  }

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // await page.waitForSelector("body");
  let source = await page.content({ waitUntil: "domcontentloaded" });
  console.log(source);
  // گرفتن اسکرین‌شات و ذخیره آن در یک فایل
  await page.screenshot({ path: "screenshot.png" });

  // بستن مرورگر
  await browser.close();
})();
