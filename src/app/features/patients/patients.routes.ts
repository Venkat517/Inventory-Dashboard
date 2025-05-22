import { Routes } from '@angular/router';
import { PatientListComponent } from './containers/patient-list/patient-list.component';

export const PATIENT_ROUTES: Routes = [
    {
        path: '',
        component: PatientListComponent
    }
]; 