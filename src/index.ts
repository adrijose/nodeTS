import app from './app';


app.listen( app.get("port") , ()=>{
    console.log("Servidor Express Iniciado en puerto " + app.get("port"));
});

