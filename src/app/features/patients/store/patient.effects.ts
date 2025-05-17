import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { PatientService } from '../services/patient.service';
import * as PatientActions from './patient.actions';

@Injectable()
export class PatientEffects {
    loadPatients$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.loadPatients),
            mergeMap(() =>
                this.patientService.getPatients().pipe(
                    map(patients => PatientActions.loadPatientsSuccess({ patients })),
                    catchError(error => of(PatientActions.loadPatientsFailure({ error: error.message })))
                )
            )
        )
    );

    addPatient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.addPatient),
            concatMap(({ patient }) =>
                this.patientService.addPatient(patient).pipe(
                    map(newPatient => PatientActions.addPatientSuccess({ patient: newPatient })),
                    catchError(error => of(PatientActions.addPatientFailure({ error: error.message })))
                )
            )
        )
    );

    updatePatient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.updatePatient),
            concatMap(({ patient }) =>
                this.patientService.updatePatient(patient).pipe(
                    map(updatedPatient => PatientActions.updatePatientSuccess({ patient: updatedPatient })),
                    catchError(error => of(PatientActions.updatePatientFailure({ error: error.message })))
                )
            )
        )
    );

    deletePatient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.deletePatient),
            mergeMap(({ id }) =>
                this.patientService.deletePatient(id).pipe(
                    map(() => PatientActions.deletePatientSuccess({ id })),
                    catchError(error => of(PatientActions.deletePatientFailure({ error: error.message })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private patientService: PatientService
    ) {}
}
