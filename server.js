import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './API/Routes/apiRoutes';
import cors from 'cors'

var app = express();
var port = process.env.port || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://root:mongodb@mongodb:27017/test?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK"); 
}); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


routes(app);

app.listen(port);
// eslint-disable-next-line
console.log("API started on: " + port);