import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrincipios } from './table-principios';

describe('TablePrincipios', () => {
  let component: TablePrincipios;
  let fixture: ComponentFixture<TablePrincipios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePrincipios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePrincipios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
