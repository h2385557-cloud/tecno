const express = require('express');
const { createProxyServer } = require('http-proxy');
const http = require('http');

const app = express();
const server = http.createServer(app);

const proxy = createProxyServer({
  target: 'https://51.210.228.138:443',
  changeOrigin: true,
  ws: true,
  secure: false,
});

server.on('upgrade', (req, socket, head) => {
  if (req.url === '/app53') {
    proxy.ws(req, socket, head);
  } else {
    socket.destroy();
  }
});

app.get('/', (_, res) => {
  res.send('danael bracked');
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Proxy WebSocket iniciado en puerto ${PORT}`);
});
