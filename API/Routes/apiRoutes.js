import events from '../Controller/eventController';

export default function(app) {
    // Events
    app.route('/docker-api')
        .get(events.getAll)
        .post(events.create);

    app.route('/docker-api/:id')
        .get(events.get)
        .put(events.update)
        .delete(events.delete);
    
    app.get('/docker-test', function(req, res) {
        res.send('Container works');
      });
      
}