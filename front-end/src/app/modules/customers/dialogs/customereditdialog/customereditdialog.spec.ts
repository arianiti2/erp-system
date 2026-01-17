import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customereditdialog } from './customereditdialog';

describe('Customereditdialog', () => {
  let component: Customereditdialog;
  let fixture: ComponentFixture<Customereditdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customereditdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customereditdialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
