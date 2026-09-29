const express = require('express');
const Unblocker = require('unblocker');

const app = express();
const unblocker = new Unblocker({ prefix: '/proxy/' });
app.use(unblocker);

const server = app.listen(process.env.PORT || 3000);
server.on('upgrade', unblocker.onUpgrade);   
