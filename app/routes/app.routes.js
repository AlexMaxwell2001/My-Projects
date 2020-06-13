module.exports = (app) => {
    const Clients = require('../controllers/app.controllers.js');
    app.get('/', Clients.root);   
}