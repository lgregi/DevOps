import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicosComponent } from './eletronicos.component';

describe('EletronicosComponent', () => {
  let component: EletronicosComponent;
  let fixture: ComponentFixture<EletronicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletronicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EletronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
