import patientData from '../data/patients';
import { NewPatient, Patient, PublicPatient } from '../types';

const getPatients = (): PublicPatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const getOnePatient = ( id: string ): Patient => {
  const wantedPatient = patientData.filter(patient =>
    patient.id === id  
  );
  return wantedPatient[0];
};

const addPatient = ( patient: NewPatient ): Patient => {
  const newPatient = {
    id: Math.random().toString(36).substr(2, 9),
    ...patient
  };

  patientData.push(newPatient);
  return newPatient;
};

export default {getPatients, addPatient, getOnePatient};