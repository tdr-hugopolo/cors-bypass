const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;


// Iniciar el servidor Express en el puerto especificado
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
}).listen(port, '0.0.0.0', function() {
    console.log('Running CORS Anywhere on ' + ':' + port);
});