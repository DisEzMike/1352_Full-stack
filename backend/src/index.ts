import express from 'express';

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.json({status: 200, data: "MediaKeep API"});
});

app.listen(PORT, () => {
	console.log(`Running Port ${PORT}`);
});
