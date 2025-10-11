import { inject, Injectable } from '@angular/core';

import { catchError, delay, map, Observable, ObservableInput, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto, ProdutoMapper } from '../../../../model/produto';
import { LoggerService } from '../../../../core/services/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private logger = inject(LoggerService);
  http = inject(HttpClient);

  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] listar()');
    return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
      map(lista => lista.map(json => ProdutoMapper.fromJson(json))),
      catchError(err => of([]))
    );
  }

  getById(id: number): Observable<Produto | undefined>{
    return of(this.listaMock.find(p => id == id));
    //return of(this.listaMock.find(p => id == id))//pipe(delay(500));
  }
}