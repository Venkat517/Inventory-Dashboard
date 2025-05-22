import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { PatientEffects } from './store/patient.effects';
import { patientReducer } from './store/patient.reducer';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { PatientListUiComponent } from './ui/patient-list/patient-list-ui.component';
import { PATIENT_ROUTES } from './patients.routes';

@NgModule({
    declarations: [
        PatientListComponent,
        PatientListUiComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PATIENT_ROUTES),
        StoreModule.forFeature('patients', patientReducer),
        EffectsModule.forFeature([PatientEffects])
    ]
})
export class PatientsModule { }
