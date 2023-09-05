// create web server
// create a route for /comments
// create a route for /comments/new
// create a route for /comments/:id
// create a route for /comments/:id/edit
// create a route for /comments/:id/delete
// create a route for /comments/:id/update

// import express
const express = require('express');
// create router
const router = express.Router();
// import comments controller
const commentsCtrl = require('../controllers/comments');

// GET /comments
router.get('/', commentsCtrl.index);
// GET /comments/new
router.get('/new', commentsCtrl.new);
// POST /comments
router.post('/', commentsCtrl.create);
// GET /comments/:id
router.get('/:id', commentsCtrl.show);
// GET /comments/:id/edit
router.get('/:id/edit', commentsCtrl.edit);
// PUT /comments/:id
router.put('/:id', commentsCtrl.update);
// DELETE /comments/:id
router.delete('/:id', commentsCtrl.delete);

// export router
module.exports = router;