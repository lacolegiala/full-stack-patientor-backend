import { NewHealthCheckEntry, NewHospitalEntry, NewOccupationalHealthcareEntry } from "../types";
import { isEntry } from "./toNewPatient";

const toNewEntry = (entry: unknown): NewHealthCheckEntry | NewHospitalEntry | NewOccupationalHealthcareEntry => {
  if (isHealthCheckEntry(entry)) {
    const newEntry: NewHealthCheckEntry = {
      type: entry.type,
      description: entry.description,
      date: entry.date,
      specialist: entry.specialist,
      diagnosisCodes: entry.diagnosisCodes,
      healthCheckRating: entry.healthCheckRating,
    };
    return newEntry;
  } 
  else if (isOccupationalHealthcareEntry(entry)) {
    const newEntry: NewOccupationalHealthcareEntry = {
      type: entry.type,
      description: entry.description,
      date: entry.date,
      specialist: entry.specialist,
      diagnosisCodes: entry.diagnosisCodes,
      employerName: entry.employerName,
      sickLeave: entry.sickLeave,
    };
    return newEntry;
  }
  else if (isHospitalEntry(entry)) {
    const newEntry: NewHospitalEntry = {
      type: entry.type,
      description: entry.description,
      date: entry.date,
      specialist: entry.specialist,
      diagnosisCodes: entry.diagnosisCodes,
      discharge: entry.discharge
    };
    return newEntry;
  }
  else {
    throw new Error('Not a valid entry');
  }
  
};

const isHealthCheckEntry = (entry: unknown): entry is NewHealthCheckEntry => {
  if (isEntry(entry)) {
    return (
      entry.type === "HealthCheck" && entry.healthCheckRating !== undefined
    );
  }
  else {
    return false;
  }
};

const isOccupationalHealthcareEntry = (entry: unknown): entry is NewOccupationalHealthcareEntry => {
  if (isEntry(entry)) {
    return (
      entry.type === "OccupationalHealthcare" && entry.employerName !== undefined
    );
  }
  else {
    return false;
  }
};

const isHospitalEntry = (entry: unknown): entry is NewHospitalEntry => {
  if (isEntry(entry)) {
    return (
      entry.type === "Hospital" && entry.discharge !== undefined
    );
  }
  else {
    return false;
  }
};

export default toNewEntry;
