import express from 'express';

// import diagnoses from '../../data/diagnoses.json'
import getDiagnoses from '../services/diagnoseService'
const router = express.Router();

// const diagnosesFromJson = diagnoses 

router.get('/', (_req, res) => {
  res.send(getDiagnoses())
})

export default router
