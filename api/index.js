import express from 'express'
// import axios from 'axios'
const bodyParser = require('body-parser')

const app = express()
module.exports = { path: '/api', handler: app }

app.use('/message', bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/message', (req, res, next) => {
  if (!req.body) {
    return res.sendStatus(400)
  }

  res.status(200).json({ message: 'OH YEAH' })
  // axios.post('https://aorivc.bitrix24.ru/rest/42/n222rl9d2q2o0134/crm.lead.add.json',
  //   req.body
  // )
  //   .then((e) => {
  //     res.send(e)
  //   })
  //   .catch((error) => {
  //     res.send(error)
  //   })
})
