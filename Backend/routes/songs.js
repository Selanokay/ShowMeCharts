const express = require('express')
const router = express.Router()

//GET all songs
router.get('/', (req, res) => {
    res.json({mssg: 'GET all songs'})
})

//GET a single song
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single song'})
})

//POST a new song
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new song'})
})

//DELETE a song
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a song'})
})

//UPDATE a song
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a song'})
})

module.exports = router