export enum NavigationPath {
    DASHBOARD = '/dashboard',
    PATIENTS = '/patients',
    APPOINTMENTS = '/appointments',
    DOCTORS = '/doctors',
    DEPARTMENTS = '/departments',
    PHARMACY = '/pharmacy',
    LAB_RESULTS = '/lab-results',
    BILLING = '/billing',
    SETTINGS = '/settings'
}

export enum NavigationIcon {
    DASHBOARD = '🏨',
    PATIENTS = '👥',
    APPOINTMENTS = '📅',
    DOCTORS = '👨‍⚕️',
    DEPARTMENTS = '🏢',
    PHARMACY = '💊',
    LAB_RESULTS = '🔬',
    BILLING = '💳',
    SETTINGS = '⚙️'
}

export interface NavigationItem {
    path: NavigationPath;
    label: string;
    icon: NavigationIcon;
    badge?: number;
}

export interface UserInfo {
    name: string;
    avatar: string;
    role: string;
}
