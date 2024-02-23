require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001;

console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_NAME);

const Pool = require('pg').Pool;
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool
  .connect()
  .then(() => {
    console.log('DB Connected!');
  })
  .catch(console.log);

app.get('/', async (req, res) => {
  try {

    const lorems = await pool.query('SELECT * FROM lorems')
    return res.json({message: 'success', data: lorems.rows})
  } catch(error) {
    res.status(500).json({message: 'failed', error});
  }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
