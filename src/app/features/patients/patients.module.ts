import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PatientEffects } from './store/patient.effects';
import { patientReducer } from './store/patient.reducer';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { PatientListUiComponent } from './ui/patient-list/patient-list-ui.component';

@NgModule({
    declarations: [
        PatientListComponent,
        PatientListUiComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('patients', patientReducer),
        EffectsModule.forFeature([PatientEffects])
    ]
})
export class PatientsModule { }
