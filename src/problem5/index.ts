import bodyParser from 'body-parser'
import express from 'express'
import { personRouter } from './modules/routes'

const app = express()
const port = 3003

// parse application/json
app.use(bodyParser.json())

app.use('/person', personRouter)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
