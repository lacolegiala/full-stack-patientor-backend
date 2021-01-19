import patientData from '../data/patients';
import { Entry, NewHealthCheckEntry, NewHospitalEntry, NewOccupationalHealthcareEntry,
  NewPatient, Patient, PublicPatient } from '../types';

const getPatients = (): PublicPatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const getOnePatient = (id: string): Patient | undefined => {
  return patientData.find(patient =>
    patient.id === id  
  );
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: Math.random().toString(36).substr(2, 9),
    ...patient
  };
  patientData.push(newPatient);
  return newPatient;
};

const addEntry = (id: string, entry: NewHospitalEntry | NewHealthCheckEntry | NewOccupationalHealthcareEntry): Entry => {
  const newEntry: Entry = {
    ...entry,
    id: Math.random().toString(36).substr(2, 9)
  };
  const patient = getOnePatient(id);
  patient?.entries.push(newEntry);
  return newEntry;
};

export default {getPatients, addPatient, getOnePatient, addEntry};