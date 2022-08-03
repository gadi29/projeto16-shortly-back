import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js'

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));