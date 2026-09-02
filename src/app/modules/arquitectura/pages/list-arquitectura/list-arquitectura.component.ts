import { Component, inject } from '@angular/core';
import { ArquitecturaService } from '../../services/arquitectura.service';
import { ArquitecturaInterface } from '../../interfaces/arquitectura.interface';

@Component({
  selector: 'app-list-arquitectura.component',
  standalone: false,
  template: '<app-table-arquitectura [arquitectura]="arquitectura"></app-table-arquitectura>',
})
export class ListArquitecturaComponent {
  arquitectura: ArquitecturaInterface[] = [];
  private arquitecturaService = inject(ArquitecturaService);
  ngOnInit(): void {
    this.arquitecturaService.getAllDatosArquitectura().subscribe({
      next: (arquitectura) => this.arquitectura = arquitectura,
      error: (error) => console.error(error),
    })
  }
}
