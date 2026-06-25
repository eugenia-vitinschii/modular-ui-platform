/* === imports === */

import express from 'express'
import cors from 'cors'

export const app = express()

app.use(cors());
app.use(express.json())

//route
app.get('/api', (_req, res)=> {
   res.json({
      status: "ok",
      message: "Backend runs"
   })
})
