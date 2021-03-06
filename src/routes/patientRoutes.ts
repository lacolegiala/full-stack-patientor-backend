/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express from 'express';

import patientService from '../services/patientService';
import toNewEntry from '../utils/toNewEntry';
import toNewPatient from '../utils/toNewPatient';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

router.get('/:id', (req, res) => {

  const foundPatient = patientService.getOnePatient(req.params.id);
  if (foundPatient) {
    res.send(foundPatient);
  }
  else {
    res.status(404).send({error: 'No patient was found on this id'});
  }
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    res.status(400).send({error: error.message});
  }
});

router.post('/:id/entries', (req, res) => {
  try {
    const newEntry = toNewEntry(req.body);

    const addedEntry = patientService.addEntry(req.params.id, newEntry);
    res.json(addedEntry);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    res.status(400).send({error: error.message});
  }

});

export default router;
