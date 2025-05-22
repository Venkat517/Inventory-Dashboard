import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PatientState } from '../models/patient.model';

// Feature selector
export const selectPatientState = createFeatureSelector<PatientState>('patients');

// Data selectors
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

// Selected patient selector
export const selectSelectedPatient = createSelector(
    selectPatientState,
    (state) => state.selectedPatient
); 