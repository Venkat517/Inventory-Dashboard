import { NavigationIcon, NavigationItem, NavigationPath } from '../types/navigation.types';

export const HOSPITAL_NAME = 'Trichy Hospitals';
export const HOSPITAL_LOGO_PATH = 'assets/hospital-logo.svg';

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        path: NavigationPath.DASHBOARD,
        label: 'Dashboard',
        icon: NavigationIcon.DASHBOARD
    },
    {
        path: NavigationPath.PATIENTS,
        label: 'Patients',
        icon: NavigationIcon.PATIENTS
    },
    {
        path: NavigationPath.APPOINTMENTS,
        label: 'Appointments',
        icon: NavigationIcon.APPOINTMENTS,
        badge: 5
    },
    {
        path: NavigationPath.DOCTORS,
        label: 'Doctors',
        icon: NavigationIcon.DOCTORS
    },
    {
        path: NavigationPath.DEPARTMENTS,
        label: 'Departments',
        icon: NavigationIcon.DEPARTMENTS
    },
    {
        path: NavigationPath.PHARMACY,
        label: 'Pharmacy',
        icon: NavigationIcon.PHARMACY
    },
    {
        path: NavigationPath.LAB_RESULTS,
        label: 'Lab Results',
        icon: NavigationIcon.LAB_RESULTS
    },
    {
        path: NavigationPath.BILLING,
        label: 'Billing',
        icon: NavigationIcon.BILLING
    },
    {
        path: NavigationPath.SETTINGS,
        label: 'Settings',
        icon: NavigationIcon.SETTINGS
    }
];
