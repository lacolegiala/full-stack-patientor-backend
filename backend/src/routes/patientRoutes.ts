import express from 'express';

import getPatients from '../services/patientService'
const router = express.Router();

// const patientsFromJson = patients 

router.get('/', (_req, res) => {
  res.send(getPatients())
})

export default router
