const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes.js')

const indicadores = require('./routes/indicadores.routes.js')
const reportes = require('./routes/reportes.routes.js')



require('dotenv').config();
app.use(express.json());


 
const url = process.env.MONGO_URL
const port = process.env.PORT 


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log('conexion establecida');


    app.use(morgan('dev'))
    app.use(express.json());
    app.use(cookieParser());

    app.use('/auth', authRoutes)
    
    app.use('/api', indicadores)
    app.use('/api', reportes)
    

    
    app.listen(port, () => {
        console.log(`conexion establecida en el puerto ${port}`);
    })
})

.catch((err) => {
    console.error('error de la conexion de la base de datos; ', err)
});