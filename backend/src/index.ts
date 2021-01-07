import express from 'express';
import cors from 'cors';
import diagnoses from '../data/diagnoses.json'
import patients from '../data/patients.json'

const diagnosesFromJson = diagnoses 
const patientsFromJson = patients

const app = express();

app.use(cors())
app.use(express.json());

const PORT = 3002;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  res.send(diagnosesFromJson)
})

app.get('/api/patients', (_req, res) => {
  res.send(patientsFromJson)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});