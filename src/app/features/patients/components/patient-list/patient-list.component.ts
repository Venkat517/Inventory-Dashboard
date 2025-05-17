import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Patient, PatientState } from '../../models/patient.model';
import * as PatientActions from '../../store/patient.actions';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
    patients$: Observable<Patient[]>;
    loading$: Observable<boolean>;
    error$: Observable<string | null>;

    constructor(private store: Store<{ patients: PatientState }>) {
        this.patients$ = this.store.select(state => state.patients.patients);
        this.loading$ = this.store.select(state => state.patients.loading);
        this.error$ = this.store.select(state => state.patients.error);
    }

    ngOnInit(): void {
        this.store.dispatch(PatientActions.loadPatients());
    }

    onViewDetails(id: string): void {
        this.store.dispatch(PatientActions.selectPatient({ id }));
    }

    onDeletePatient(id: string): void {
        if (confirm('Are you sure you want to delete this patient?')) {
            this.store.dispatch(PatientActions.deletePatient({ id }));
        }
    }

    getStatusClass(status: string): string {
        switch (status) {
            case 'Active':
                return 'status-active';
            case 'Critical':
                return 'status-critical';
            case 'Discharged':
                return 'status-discharged';
            default:
                return '';
        }
    }
} 