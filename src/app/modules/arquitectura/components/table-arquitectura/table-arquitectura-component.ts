import { Component, Input } from '@angular/core';
import { ArquitecturaCategory, ArquitecturaInterface } from '../../interfaces/arquitectura.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

@Component({
  selector: 'app-table-arquitectura',
  standalone: false,
  templateUrl: './table-arquitectura-component.html',
})
export class TableArquitecturaComponent {
  @Input() arquitectura: ArquitecturaInterface[] = [];
  categoryMap: Record<ArquitecturaCategory, BadgeType> = {
    'Carnes' : 'danger',
    'Frutas': 'warning',
    'Lacteos': 'primary',
    'Verduras': 'success',
  }
}
