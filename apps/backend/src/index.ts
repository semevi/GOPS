import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Тест
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Привет от бэка GOPS! ✈️ Готов к пушбэку' });
});

// Экспорт для Vercel (serverless)
export default app;
