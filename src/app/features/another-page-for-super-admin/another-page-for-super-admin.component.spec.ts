import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPageForSuperAdminComponent } from './another-page-for-super-admin.component';

describe('AnotherPageForSuperAdminComponent', () => {
  let component: AnotherPageForSuperAdminComponent;
  let fixture: ComponentFixture<AnotherPageForSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherPageForSuperAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherPageForSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
