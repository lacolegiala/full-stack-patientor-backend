import express from 'express';

import patients from '../../data/patients.json'
const router = express.Router();

const patientsFromJson = patients 

router.get('/', (_req, res) => {
  res.send(patientsFromJson)
})

export default router
