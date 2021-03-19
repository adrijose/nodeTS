import express from 'express';
import morgan from 'morgan';

// Init
const app = express();

// Settings
app.set('port',  process.env.PORT || 3001);

//////// CARGAR ROUTAS //////////


/////// CARGAR MIDDLEWARE ///////


// Cargar Morgan de forma DEV
app.use(morgan('dev'));
// Toda la informacion de los formularios se parse con: aplication/x-www-form-urlencoded
app.use( express.urlencoded({ extended: false }));
// Parsear a JSON:
app.use( express.json() );

/////////////  CORS ///////////////
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


/////// Prefijos a las rutas ///////



///////////// EXPORTAR APP /////////
export default app;
