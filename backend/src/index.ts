import express from 'express';
import apiRouter from './routes/api.routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.json({ status: 200, data: 'MediaKeep API' });
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
	console.log(`Running Port ${PORT}`);
});
