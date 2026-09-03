import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DATIS_ARQUITECTURA } from '../../../core/config/arquitectura.config';

/** Servicio que proporciona el contenido informativo de arquitectura. */
@Injectable({
    providedIn: 'root',
})
export class ArquitecturaService {
    /**
     * Devuelve el contenido completo de arquitectura como un observable.
     *
     * @returns Observable que emite una vez el objeto `DATIS_ARQUITECTURA`.
     */
    getDatosArquitectura(): Observable<typeof DATIS_ARQUITECTURA>{
        return of(DATIS_ARQUITECTURA);
    }
}
