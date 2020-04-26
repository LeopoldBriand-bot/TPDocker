import eventModel from '../Model/eventModel'; 
import { model } from 'mongoose'; 
const EventModel = model('EventModel', eventModel); // Création du modèle à partir du schéma

function respond(err, result, res) { // Fonction utilisée tout au long du contrôleur pour répondre aux requetes
  if (err) {
    return res.status(500).json({error: err});
  }
  return res.json(result);
}

const eventModelController = {
  getAll: (req, res) => {  // Récupérer tous les événements
    EventModel.find({}, (err, EventModels) => {
      return respond(err, EventModels, res);
    });
  },
  create: (req, res) => { // Créer un événement
    const newEventModel = new EventModel(req.body);
    newEventModel.save((err, savedEventModel) => {
      return respond(err, savedEventModel, res);
    });
  },
  get: (req, res) => { // Récupérer un événement
    EventModel.findById(req.params.id, (err, EventModel) => {
      return respond(err, EventModel, res);
    });
  },
  update: (req, res) => { // Mettre à jour un événement
    EventModel.findByIdAndUpdate(req.params.id, req.body, (err, EventModel) => {
      return respond(err, EventModel, res);
    });
  },
  delete: (req, res) => { // Supprimer un événement
    EventModel.findByIdAndRemove(req.params.id, (err, EventModel) => {
      return respond(err, EventModel, res);
    });
  }
};

export default eventModelController; // Export du contrôleur