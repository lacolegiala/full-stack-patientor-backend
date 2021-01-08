import express from 'express';

import patientService from '../services/patientService';
import toNewPatient from '../utils/toNewPatient';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

router.post('/', (req, res) => {
  // const { name, dateOfBirth, ssn, gender, occupation } = req.body as NewPatient;
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error) {
    res.status(400).send(error);
  }
  // const newPatient = patientService.addPatient({
  //   name,
  //   dateOfBirth,
  //   ssn,
  //   gender,
  //   occupation
  // });
  // res.json(newPatient);
});

export default router;
