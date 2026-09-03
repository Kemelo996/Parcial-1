import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableArquitecturaComponent } from './table-arquitectura-component';

describe('TableArquitecturaComponent', () => {
  let component: TableArquitecturaComponent;
  let fixture: ComponentFixture<TableArquitecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableArquitecturaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableArquitecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
