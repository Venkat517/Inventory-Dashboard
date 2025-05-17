import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
        <div class="dashboard-container">
            <h1>Welcome to Dr Abhimari Hospitals</h1>
            <p>Dashboard is under construction. Please use the sidebar to navigate to other sections.</p>
        </div>
    `,
    styles: [`
        .dashboard-container {
            padding: 2rem;
            text-align: center;
            color: #2f3687;
        }
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1.2rem;
            color: #666;
        }
    `]
})
export class DashboardComponent {} 