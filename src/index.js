const express = require('express');
const morgan = require('morgan');
//inicializar
const app = express();
//settings
app.set('port',process.env.PORT || 4000);
//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index.js'));
app.use('/pelicula',require('./routes/pelicula.js'));
app.use('/categoria',require('./routes/categoria.js'));
app.use('/cine',require('./routes/cine.js'));
app.listen(app.get('port'),()=>{
    console.log("server on port" , app.get('port'));
});
