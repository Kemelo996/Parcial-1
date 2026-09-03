import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrincipiosComponent } from './list-principios.component';

describe('ListPrincipiosComponent', () => {
  let component: ListPrincipiosComponent;
  let fixture: ComponentFixture<ListPrincipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPrincipiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrincipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
