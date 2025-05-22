import { createReducer, on } from '@ngrx/store';
import { PatientState } from '../models/patient.model';
import * as PatientActions from './patient.actions';

export const initialState: PatientState = {
    patients: [],
    selectedPatient: null,
    loading: false,
    error: null
};

export const patientReducer = createReducer(
    initialState,

    // Load Patients
    on(PatientActions.loadPatients, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PatientActions.loadPatientsSuccess, (state, { patients }) => ({
        ...state,
        patients,
        loading: false
    })),
    on(PatientActions.loadPatientsFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),

    // Add Patient
    on(PatientActions.addPatient, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PatientActions.addPatientSuccess, (state, { patient }) => ({
        ...state,
        patients: [...state.patients, patient],
        loading: false
    })),
    on(PatientActions.addPatientFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),

    // Update Patient
    on(PatientActions.updatePatient, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PatientActions.updatePatientSuccess, (state, { patient }) => ({
        ...state,
        patients: state.patients.map(p => p.id === patient.id ? patient : p),
        selectedPatient: patient,
        loading: false
    })),
    on(PatientActions.updatePatientFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),

    // Delete Patient
    on(PatientActions.deletePatient, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PatientActions.deletePatientSuccess, (state, { id }) => ({
        ...state,
        patients: state.patients.filter(patient => patient.id !== id),
        selectedPatient: state.selectedPatient?.id === id ? null : state.selectedPatient,
        loading: false
    })),
    on(PatientActions.deletePatientFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),

    // Select Patient
    on(PatientActions.selectPatient, (state, { id }) => ({
        ...state,
        selectedPatient: state.patients.find(patient => patient.id === id) || null
    })),

    // Clear Selected Patient
    on(PatientActions.clearSelectedPatient, (state) => ({
        ...state,
        selectedPatient: null
    }))
);
export { PatientState };

