import patientData from '../../data/patients'
import { Patient } from '../types'

type PatientWithoutSsn = Omit<Patient, 'ssn'>

const getPatients = (): PatientWithoutSsn[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))
}

export default getPatients