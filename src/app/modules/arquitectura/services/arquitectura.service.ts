import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DATIS_ARQUITECTURA } from '../../../core/config/arquitectura.config';

@Injectable({
    providedIn: 'root',
})
export class ArquitecturaService {
    getDatosArquitectura(): Observable<typeof DATIS_ARQUITECTURA>{
        return of(DATIS_ARQUITECTURA);
    }
}
