import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
          maxAge: 25
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe('Dr Abhimari Hospitals');
  });

  it('should render the app layout', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const appLayout = compiled.querySelector('.app-layout');
    expect(appLayout).toBeTruthy();
  });

  it('should render sidebar component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sidebar = compiled.querySelector('app-sidebar');
    expect(sidebar).toBeTruthy();
  });

  it('should render main content with router outlet', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mainContent = compiled.querySelector('.main-content');
    const routerOutlet = compiled.querySelector('router-outlet');

    expect(mainContent).toBeTruthy();
    expect(routerOutlet).toBeTruthy();
  });

  it('should have correct main content styling', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mainContent = compiled.querySelector('.main-content');
    const styles = window.getComputedStyle(mainContent as Element);

    expect(styles.flex).toBe('1 1 0%');
    expect(styles.padding).toBe('32px'); // 2rem computed to pixels
    expect(styles.marginLeft).toBe('280px');
    expect(styles.backgroundColor).toBe('rgb(248, 250, 252)'); // #f8fafc in RGB
  });
});
