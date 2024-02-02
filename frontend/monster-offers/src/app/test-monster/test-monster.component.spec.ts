import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMonsterComponent } from './test-monster.component';

describe('TestMonsterComponent', () => {
  let component: TestMonsterComponent;
  let fixture: ComponentFixture<TestMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMonsterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
