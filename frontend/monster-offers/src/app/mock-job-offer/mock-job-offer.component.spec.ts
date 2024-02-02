import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockJobOfferComponent } from './mock-job-offer.component';

describe('MockJobOfferComponent', () => {
  let component: MockJobOfferComponent;
  let fixture: ComponentFixture<MockJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockJobOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
