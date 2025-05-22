import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private apiUrl = 'api/patients'; // This will be replaced with your actual API endpoint

    // Temporary mock data
    private mockPatients: Patient[] = [
        {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            age: 45,
            dateOfBirth: '1979-05-15',
            gender: 'Male',
            bloodGroup: 'O+',
            contactNumber: '+1234567890',
            email: 'john.doe@example.com',
            address: '123 Main St, City',
            admissionDate: '2024-05-15',
            diagnosis: 'Hypertension',
            status: 'Active',
            assignedDoctor: 'Dr. Smith',
            roomNumber: '301',
            lastVisit: '2024-05-15',
            medicalHistory: ['Diabetes', 'High Blood Pressure'],
            upcomingAppointment: '2024-05-20'
        },
        {
            id: '2',
            firstName: 'Jane',
            lastName: 'Smith',
            age: 32,
            dateOfBirth: '1992-08-20',
            gender: 'Female',
            bloodGroup: 'A+',
            contactNumber: '+1987654321',
            email: 'jane.smith@example.com',
            address: '456 Oak St, Town',
            admissionDate: '2024-05-14',
            diagnosis: 'Pneumonia',
            status: 'Critical',
            assignedDoctor: 'Dr. Johnson',
            roomNumber: 'ICU-2',
            lastVisit: '2024-05-14',
            medicalHistory: ['Asthma'],
            upcomingAppointment: '2024-05-18'
        }
    ];

    constructor(private http: HttpClient) { }

    getPatients(): Observable<Patient[]> {
        // For now, return mock data
        return of(this.mockPatients);
        // TODO: Implement actual API call
        // return this.http.get<Patient[]>(this.apiUrl);
    }

    getPatient(id: string): Observable<Patient> {
        const patient = this.mockPatients.find(p => p.id === id);
        return of(patient!);
        // TODO: Implement actual API call
        // return this.http.get<Patient>(`${this.apiUrl}/${id}`);
    }

    addPatient(patient: Patient): Observable<Patient> {
        // Simulate API call
        const newPatient = { ...patient, id: Date.now().toString() };
        this.mockPatients.push(newPatient);
        return of(newPatient);
        // TODO: Implement actual API call
        // return this.http.post<Patient>(this.apiUrl, patient);
    }

    updatePatient(patient: Patient): Observable<Patient> {
        // Simulate API call
        const index = this.mockPatients.findIndex(p => p.id === patient.id);
        if (index !== -1) {
            this.mockPatients[index] = patient;
        }
        return of(patient);
        // TODO: Implement actual API call
        // return this.http.put<Patient>(`${this.apiUrl}/${patient.id}`, patient);
    }

    deletePatient(id: string): Observable<void> {
        // Simulate API call
        const index = this.mockPatients.findIndex(p => p.id === id);
        if (index !== -1) {
            this.mockPatients.splice(index, 1);
        }
        return of(void 0);
        // TODO: Implement actual API call
        // return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
