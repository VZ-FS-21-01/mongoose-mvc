const express = require('express')
// Großbuchstabe!
const router = express.Router()

const catControlers = require('../contolers/catControlers')
// console.log(catControlers)

// app wird durch Router ersetzt
// das /cats wird von unserem server durch app.use('/cats', catRoutes) vorausgesetzt
// da wir das /cats schon aus dem Server bekommen hier nur / !!!
router.get('/', catControlers.cat_index)
router.get('/add', catControlers.cat_add_get)
router.post('/add', catControlers.cat_add_post)
router.get('/:id', catControlers.cat_detail_get)
router.post('/:id', catControlers.cat_detail_post)
router.delete('/:id', catControlers.cat_delete)

module.exports = router