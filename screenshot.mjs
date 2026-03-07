import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const width = parseInt(process.argv[4]) || 1280;
const dir = 'screenshots';

if (!existsSync(dir)) mkdirSync(dir);

const existing = readdirSync(dir).filter(f => f.startsWith('screenshot-'));
const nextNum = existing.length > 0
  ? Math.max(...existing.map(f => parseInt(f.split('-')[1]))) + 1
  : 1;

const filename = label
  ? `screenshot-${nextNum}-${label}.png`
  : `screenshot-${nextNum}.png`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
await page.screenshot({ path: join(dir, filename), fullPage: true });
await browser.close();
console.log(`Saved: ${join(dir, filename)}`);
