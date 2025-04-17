import express from 'express';
import router from './routes';
import { connectDB } from './database';

const app: express.Application = express();

const PORT: number = 8000;

app.use('/api', router)
connectDB()
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});