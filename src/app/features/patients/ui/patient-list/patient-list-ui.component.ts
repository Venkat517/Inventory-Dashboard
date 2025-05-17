import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../../models/patient.model';

@Component({
    selector: 'app-patient-list-ui',
    templateUrl: './patient-list-ui.component.html',
    styleUrls: ['./patient-list-ui.component.scss']
})
export class PatientListUiComponent {
    @Input() patients: Patient[] | null = [];
    @Input() loading: boolean | null = false;
    @Input() error: string | null = null;

    @Output() selectPatient = new EventEmitter<string>();
    @Output() deletePatient = new EventEmitter<string>();
    @Output() addPatient = new EventEmitter<void>();
    @Output() editPatient = new EventEmitter<string>();

    displayedColumns: string[] = [
        'name',
        'dateOfBirth',
        'contactNumber',
        'lastVisit',
        'status',
        'actions'
    ];

    getPatientFullName(patient: Patient): string {
        return `${patient.firstName} ${patient.lastName}`;
    }

    getStatusClass(status: string): string {
        return {
            'active': 'status-active',
            'inactive': 'status-inactive',
            'critical': 'status-critical'
        }[status] || '';
    }

    getStatusIcon(status: string): string {
        return {
            'active': 'fas fa-check-circle',
            'inactive': 'fas fa-pause-circle',
            'critical': 'fas fa-exclamation-circle'
        }[status] || 'fas fa-question-circle';
    }

    onAdd(): void {
        this.addPatient.emit();
    }

    onSelect(id: string): void {
        this.selectPatient.emit(id);
    }

    onEdit(id: string, event: MouseEvent): void {
        event.stopPropagation();
        this.editPatient.emit(id);
    }

    onDelete(id: string, event: MouseEvent): void {
        event.stopPropagation();
        this.deletePatient.emit(id);
    }
}
