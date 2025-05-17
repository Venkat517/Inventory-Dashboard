export interface Patient {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    dateOfBirth: string;
    gender: 'Male' | 'Female' | 'Other';
    bloodGroup: string;
    contactNumber: string;
    email: string;
    address: string;
    admissionDate: string;
    diagnosis: string;
    status: 'Active' | 'Discharged' | 'Critical';
    assignedDoctor: string;
    roomNumber?: string;
    lastVisit: string;
    medicalHistory: string[];
    upcomingAppointment?: string;
}

export interface PatientState {
    patients: Patient[];
    selectedPatient: Patient | null;
    loading: boolean;
    error: string | null;
}
