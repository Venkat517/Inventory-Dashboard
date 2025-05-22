import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Patient } from '../../models/patient.model';
import * as PatientActions from '../../store/patient.actions';
import * as PatientSelectors from '../../store/patient.selectors';
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
        private store: Store,
        private router: Router
    ) {
        this.patients$ = this.store.select(PatientSelectors.selectAllPatients);
        this.loading$ = this.store.select(PatientSelectors.selectPatientsLoading);
        this.error$ = this.store.select(PatientSelectors.selectPatientsError);
    }

    ngOnInit(): void {
        this.loadPatients();
    }

    loadPatients(): void {
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
        this.store.dispatch(PatientActions.selectPatient({ id }));
        this.router.navigate(['/patients', id, 'edit']);
    }
}
