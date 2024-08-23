import express from 'express'

const app = express()

app.get('/status', (req, res) => {
    res.send('Hello World!')
})

app.get('/update', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})