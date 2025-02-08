import express from 'express';
import apiRouter from './routes/api.routes';
import cors from 'cors'

const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Enable CORS
app.use(cors({
	origin: ['*'],
	credentials: true
}))

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
	res.json({ status: 200, data: 'MediaKeep API' });
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
	console.log(`Running Port ${PORT}`);
});
