/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Gender, NewPatient } from '../types';

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toNewPatient = (object: any): NewPatient => {
  const newPatient: NewPatient = {
    name: parseStringField(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseStringField(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseStringField(object.occupation)
  };
  return newPatient;
};

const parseStringField = (field: any): string => {
  if (!field || !isString(field)) {
    throw new Error('Incorrect or missing data');
  }
  return field;
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) ||!isDate(date)) {
    throw new Error('Incorrect or missing date');
  }
  return date;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  return gender;
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

export default toNewPatient;