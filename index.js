const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())


const categories = require('./data/category.json')
const newses = require('./data/news.json')
app.get('/', ((req, res) => {
    res.send('News Api running')
}))
app.get('/category', ((req, res) => {
    res.json(categories)
}))

app.get('/category/:id', ((req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.json(newses)
    }
    const selectedCategories = newses.filter(news => news['category_id'] === id)
    res.json(selectedCategories)
}))

app.get('/news', ((req, res) => {
    res.json(newses)
}))

app.get('/news/:id', ((req, res) => {
    const id = req.params.id;
    const selectedId = newses.find(news => news._id === id)
    res.json(selectedId)
}))

app.listen(port, () => {
    console.log('daylight server run on port=', port);
})