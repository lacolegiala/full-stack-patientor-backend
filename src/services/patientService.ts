import patientData from '../../data/patients';
import { NewPatient, Patient } from '../types';

type PatientWithoutSsn = Omit<Patient, 'ssn'>;

const getPatients = (): PatientWithoutSsn[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = ( patient: NewPatient ): Patient => {
  const newPatient = {
    id: Math.random().toString(36).substr(2, 9),
    ...patient
  };

  patientData.push(newPatient);
  return newPatient;
};

export default {getPatients, addPatient};