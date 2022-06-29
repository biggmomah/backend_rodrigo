const express = require('express');
const mongoose = require('mongoose');
const app = require('./app/app');

const PORT = process.env.PORT
const urlBase = process.env.DB

if (process.env.AMBIENTE == 'mongo') mongoose.connect(urlBase)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

