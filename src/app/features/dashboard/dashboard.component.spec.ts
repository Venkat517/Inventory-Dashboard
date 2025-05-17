import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let element: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [BrowserModule, CommonModule]
        }).compileComponents();

        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render welcome message', () => {
        const h1 = element.querySelector('h1');
        expect(h1?.textContent).toBe('Welcome to Dr Abhimari Hospitals');
    });

    it('should render dashboard under construction message', () => {
        const p = element.querySelector('p');
        expect(p?.textContent).toBe('Dashboard is under construction. Please use the sidebar to navigate to other sections.');
    });

    describe('Styling', () => {
        it('should have correct container styling', () => {
            const container = element.querySelector('.dashboard-container');
            const computedStyles = window.getComputedStyle(container as Element);
            
            expect(computedStyles.padding).toBe('32px'); // 2rem computed to pixels
            expect(computedStyles.textAlign).toBe('center');
            expect(computedStyles.color).toBe('rgb(47, 54, 135)'); // #2f3687 in RGB
        });

        it('should have correct heading styles', () => {
            const h1 = element.querySelector('h1');
            const computedStyles = window.getComputedStyle(h1 as Element);
            
            expect(computedStyles.fontSize).toBe('32px'); // 2rem computed to pixels
            expect(computedStyles.marginBottom).toBe('16px'); // 1rem computed to pixels
        });

        it('should have correct paragraph styles', () => {
            const p = element.querySelector('p');
            const computedStyles = window.getComputedStyle(p as Element);
            
            expect(computedStyles.fontSize).toBe('19.2px'); // 1.2rem computed to pixels
            expect(computedStyles.color).toBe('rgb(102, 102, 102)'); // #666 in RGB
        });
    });
});
