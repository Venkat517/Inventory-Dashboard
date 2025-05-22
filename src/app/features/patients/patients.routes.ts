import { Routes } from '@angular/router';
import { PatientListComponent } from './containers/patient-list/patient-list.component';

export const PATIENT_ROUTES: Routes = [
    {
        path: '',
        component: PatientListComponent
    },
    {
        path: 'new',
        component: PatientListComponent // TODO: Replace with PatientFormComponent when created
    },
    {
        path: ':id',
        component: PatientListComponent // TODO: Replace with PatientDetailsComponent when created
    },
    {
        path: ':id/edit',
        component: PatientListComponent // TODO: Replace with PatientFormComponent when created
    }
]; 