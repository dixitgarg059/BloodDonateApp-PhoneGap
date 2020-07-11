import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonorRegistrationPage } from './donor-registration.page';

describe('DonorRegistrationPage', () => {
  let component: DonorRegistrationPage;
  let fixture: ComponentFixture<DonorRegistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorRegistrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonorRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
