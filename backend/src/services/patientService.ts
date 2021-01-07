import patientData from '../../data/patients.json'
import { Patient } from '../types'

const patients: Patient[] = patientData as Patient[]

const getPatients = (): Patient[] => {
  return patients
}

export default getPatients