import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPageForAdminComponent } from './another-page-for-admin.component';

describe('AnotherPageForAdminComponent', () => {
  let component: AnotherPageForAdminComponent;
  let fixture: ComponentFixture<AnotherPageForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherPageForAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherPageForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
