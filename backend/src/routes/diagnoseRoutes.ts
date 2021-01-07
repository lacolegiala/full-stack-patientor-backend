import express from 'express';

import diagnoses from '../../data/diagnoses.json'
const router = express.Router();

const diagnosesFromJson = diagnoses 

router.get('/', (_req, res) => {
  res.send(diagnosesFromJson)
})

export default router
