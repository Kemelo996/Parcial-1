import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListArquitecturaComponent } from './list-arquitectura.component';

describe('ListArquitecturaComponent', () => {
  let component: ListArquitecturaComponent;
  let fixture: ComponentFixture<ListArquitecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListArquitecturaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListArquitecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
