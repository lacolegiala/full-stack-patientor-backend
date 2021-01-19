import { NewHealthCheckEntry, NewHospitalEntry, NewOccupationalHealthcareEntry } from "../types";
import { isEntry } from "./toNewPatient";

const toNewEntry = (entry: unknown): NewHealthCheckEntry | NewHospitalEntry | NewOccupationalHealthcareEntry => {
  if (isEntry(entry)) {
    if (entry.type === 'HealthCheck') {
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
    else if (entry.type === 'OccupationalHealthcare') {
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
   else {
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
  }
  else {
    throw new Error('Not a valid entry');
  }
  
};

export default toNewEntry;
