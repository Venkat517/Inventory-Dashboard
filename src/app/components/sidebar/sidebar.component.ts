import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HOSPITAL_NAME, HOSPITAL_LOGO_PATH, NAVIGATION_ITEMS } from '../../core/config/hospital.config';
import { NavigationItem } from '../../core/types/navigation.types';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    readonly hospitalName = HOSPITAL_NAME;
    readonly logoPath = HOSPITAL_LOGO_PATH;
    readonly navigationItems = NAVIGATION_ITEMS;
    readonly currentUser = {
        name: 'Dr. Abhirami Kamban',
        role: 'Chief Medical Officer',
        avatar: '👨‍⚕️'
    };

    getFirstWord(name: string): string {
        return name.split(' ')[0];
    }

    getRestOfName(name: string): string {
        return name.split(' ').slice(1).join(' ');
    }
}
