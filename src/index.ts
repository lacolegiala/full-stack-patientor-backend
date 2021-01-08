import express from 'express';
import cors from 'cors';
import diagnoseRouter from './routes/diagnoseRoutes';
import patientRouter from './routes/patientRoutes';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3002;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);

app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});