import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DATOS_ARQUITECTURA } from '../../../core/config/arquitectura.config';
import { ArquitecturaInterface } from '../interfaces/arquitectura.interface';

/** Servicio que proporciona el contenido informativo de arquitectura. */
@Injectable({
    providedIn: 'root',
})
export class ArquitecturaService {
    /**
     * Devuelve el contenido completo de arquitectura como un observable.
     *
     * @returns Observable que emite una vez el objeto `DATOS_ARQUITECTURA`.
     */
    getDatosArquitectura(): Observable<ArquitecturaInterface>{
        return of(DATOS_ARQUITECTURA);
    }
}
