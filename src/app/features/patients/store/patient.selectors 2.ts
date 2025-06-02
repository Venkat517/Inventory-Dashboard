import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PatientState } from './patient.reducer';

export const selectPatientState = createFeatureSelector<PatientState>('patients');

export const selectAllPatients = createSelector(
    selectPatientState,
    (state) => state.patients
);

export const selectPatientsLoading = createSelector(
    selectPatientState,
    (state) => state.loading
);

export const selectPatientsError = createSelector(
    selectPatientState,
    (state) => state.error
);

export const selectSelectedPatientId = createSelector(
    selectPatientState,
    (state) => state.selectedPatientId
);

export const selectSelectedPatient = createSelector(
    selectAllPatients,
    selectSelectedPatientId,
    (patients, selectedId) => patients.find(patient => patient.id === selectedId) || null
);
