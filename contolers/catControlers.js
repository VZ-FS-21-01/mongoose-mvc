// Alle Funktionen, die mit den CatRoutes zu tun haben

const Cat = require('../models/cats')

const cat_index = (req, res) => {
    Cat.find()
        .then(result => res.render('cats/cats', { cats: result }))
        .catch(err => console.log(err))
}
const cat_add_get = (req, res) => {
    res.render('cats/add')
}
const cat_add_post = (req, res) => {
    // console.log(req.body)
    const cat = new Cat(req.body)
    cat.save()
        .then(result => res.redirect('/cats'))
        .catch(err => console.log(err))
}
const cat_detail_get = (req, res) => {
    Cat.findById(req.params.id)
        .then(result => res.render('cats/detail', { cat: result }))
        .catch(err => console.log(err))
}
const cat_detail_post = (req, res) => {
    Cat.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.redirect('/cats'))
        .catch(err => console.log(err))
}
const cat_delete = (req, res) => {
    // console.log(req.params.id)
    Cat.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json({
                redirect: '/cats'
            })
        })
        .catch(err => console.log(err))
}


module.exports = {
    // key: etwas
    // etwas: etwas
    // etwas
    cat_index,
    cat_add_get,
    cat_add_post,
    cat_detail_get,
    cat_detail_post,
    cat_delete
}