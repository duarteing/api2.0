const { Router } = require('express');
const router = Router();

var distributors = require('../controllers/distributors.controller.js');


module.exports = function (router) {

   

    // Create a new distributors
    router.post('/api/distributors', distributors.create);

    // Retrieve all distributor
    router.get('ver', distributors.findAll);

    // Retrieve a single distributor by Id
    router.get('/api/distributors/:id', distributors.findOne);

    // Update a distributor with Id
    router.put('/api/distributors/:id', distributors.update);

    // Delete a distributor with Id
    router.delete('/api/distributors/:id', distributors.delete);

};
