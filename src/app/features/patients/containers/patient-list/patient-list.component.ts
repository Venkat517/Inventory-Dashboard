import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Patient, PatientState } from '../../models/patient.model';
import * as PatientActions from '../../store/patient.actions';
import { selectAllPatients, selectPatientsLoading, selectPatientsError } from '../../store/patient.selectors';
import { PatientListUiComponent } from '../../ui/patient-list/patient-list-ui.component';

@Component({
    selector: 'app-patient-list',
    template: `
        <app-patient-list-ui
            [patients]="patients$ | async"
            [loading]="loading$ | async"
            [error]="error$ | async"
            (selectPatient)="onSelectPatient($event)"
            (deletePatient)="onDeletePatient($event)"
            (addPatient)="onAddPatient()"
            (editPatient)="onEditPatient($event)"
        ></app-patient-list-ui>
    `
})
export class PatientListComponent implements OnInit {
    patients$: Observable<Patient[]>;
    loading$: Observable<boolean>;
    error$: Observable<string | null>;

    constructor(
        private store: Store<{ patients: PatientState }>,
        private router: Router
    ) {
        this.patients$ = this.store.select(selectAllPatients);
        this.loading$ = this.store.select(selectPatientsLoading);
        this.error$ = this.store.select(selectPatientsError);
    }

    ngOnInit(): void {
        this.store.dispatch(PatientActions.loadPatients());
    }

    onSelectPatient(id: string): void {
        this.store.dispatch(PatientActions.selectPatient({ id }));
        this.router.navigate(['/patients', id]);
    }

    onDeletePatient(id: string): void {
        if (confirm('Are you sure you want to delete this patient?')) {
            this.store.dispatch(PatientActions.deletePatient({ id }));
        }
    }

    onAddPatient(): void {
        this.router.navigate(['/patients/new']);
    }

    onEditPatient(id: string): void {
        this.router.navigate(['/patients', id, 'edit']);
    }
}
