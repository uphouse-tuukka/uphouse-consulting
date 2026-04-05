/**
 * Locale-aware static preview server.
 *
 * Extends Astro's default static file serving with a single addition:
 * Finnish-prefixed paths (/fi/*) that result in a 404 are served
 * dist/fi/404/index.html (with status 404) instead of dist/404.html.
 *
 * Usage: node preview-server.mjs [--host <host>] [--port <port>]
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');

// Parse CLI args (--host 127.0.0.1 --port 4323)
const args = process.argv.slice(2);
const getArg = (flag) => {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : null;
};
const HOST = getArg('--host') ?? '127.0.0.1';
const PORT = parseInt(getArg('--port') ?? '4321', 10);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const abs = path.join(DIST, decoded);

  // Exact file match
  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return abs;
  // Directory index
  const idx = path.join(abs, 'index.html');
  if (fs.existsSync(idx)) return idx;
  // Flat .html file (e.g. /about → /about.html)
  const flat = abs.replace(/\/$/, '') + '.html';
  if (fs.existsSync(flat)) return flat;

  return null;
}

function serve404(req, res) {
  const isFinnish = req.url.startsWith('/fi/') || req.url === '/fi';
  const fi404 = path.join(DIST, 'fi', '404', 'index.html');
  const en404 = path.join(DIST, '404.html');

  const page = isFinnish && fs.existsSync(fi404) ? fi404 : en404;
  if (fs.existsSync(page)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(page));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url);
  if (!filePath) return serve404(req, res);

  const ext = path.extname(filePath);
  const contentType = MIME[ext] ?? 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(fs.readFileSync(filePath));
});

server.listen(PORT, HOST, () => {
  console.log(`Preview server running at http://${HOST}:${PORT}/`);
});
