import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchDonorPage } from './search-donor.page';

describe('SearchDonorPage', () => {
  let component: SearchDonorPage;
  let fixture: ComponentFixture<SearchDonorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDonorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDonorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
