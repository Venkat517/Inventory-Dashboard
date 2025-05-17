import { createAction, props } from '@ngrx/store';
import { Patient } from '../models/patient.model';

// Load Patients
export const loadPatients = createAction('[Patient] Load Patients');
export const loadPatientsSuccess = createAction(
    '[Patient] Load Patients Success',
    props<{ patients: Patient[] }>()
);
export const loadPatientsFailure = createAction(
    '[Patient] Load Patients Failure',
    props<{ error: string }>()
);

// Add Patient
export const addPatient = createAction(
    '[Patient] Add Patient',
    props<{ patient: Patient }>()
);
export const addPatientSuccess = createAction(
    '[Patient] Add Patient Success',
    props<{ patient: Patient }>()
);
export const addPatientFailure = createAction(
    '[Patient] Add Patient Failure',
    props<{ error: string }>()
);

// Update Patient
export const updatePatient = createAction(
    '[Patient] Update Patient',
    props<{ patient: Patient }>()
);
export const updatePatientSuccess = createAction(
    '[Patient] Update Patient Success',
    props<{ patient: Patient }>()
);
export const updatePatientFailure = createAction(
    '[Patient] Update Patient Failure',
    props<{ error: string }>()
);

// Delete Patient
export const deletePatient = createAction(
    '[Patient] Delete Patient',
    props<{ id: string }>()
);
export const deletePatientSuccess = createAction(
    '[Patient] Delete Patient Success',
    props<{ id: string }>()
);
export const deletePatientFailure = createAction(
    '[Patient] Delete Patient Failure',
    props<{ error: string }>()
);

// Select Patient
export const selectPatient = createAction(
    '[Patient] Select Patient',
    props<{ id: string }>()
);

// Clear Selected Patient
export const clearSelectedPatient = createAction(
    '[Patient] Clear Selected Patient'
);
