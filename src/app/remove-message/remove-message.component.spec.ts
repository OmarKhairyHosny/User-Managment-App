import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMessageComponent } from './remove-message.component';

describe('RemoveMessageComponent', () => {
  let component: RemoveMessageComponent;
  let fixture: ComponentFixture<RemoveMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
