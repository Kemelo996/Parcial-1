import { Component } from '@angular/core';
import { DATIS_ARQUITECTURA } from '../../../../core/config/arquitectura.config';

@Component({
  selector: 'app-table-arquitectura',
  standalone: false,
  templateUrl: './table-arquitectura-component.html',
})
export class TableArquitecturaComponent {
  arquitecturaData = DATIS_ARQUITECTURA;
}
