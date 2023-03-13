const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())


const category = require('./data/category.json')
const news = require('./data/news.json')
app.get('/', ((req, res) => {
    res.send('News Api running')
}))
app.get('/category', ((req, res) => {
    res.json(category)
}))

app.get('/news', ((req, res) => {
    res.json(news)
}))

app.listen(port, () => {
    console.log('daylight server run on port=', port);
})