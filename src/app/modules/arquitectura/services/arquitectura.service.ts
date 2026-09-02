import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DATOS_ARQUITECTURA } from '../../../core/config/arquitectura.config';
import { ArquitecturaInterface } from '../interfaces/arquitectura.interface';

@Injectable({
    providedIn: 'root',
})
export class ArquitecturaService {
    getAllDatosArquitectura(): Observable<ArquitecturaInterface[]>{
        return of(DATOS_ARQUITECTURA);
    }
}
