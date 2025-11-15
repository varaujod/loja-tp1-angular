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
  apiURL = 'https://fakestoreapi.com/products';

  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] listar()');
    return this.http.get<any[]>(this.apiURL).pipe(
      map(lista => lista.map(json => ProdutoMapper.fromJson(json))),
      catchError(err => of([]))
    );
  }

  getById(id: number): Observable<Produto | undefined>{
    this.logger.info(`[ProdutoService] getById(${id})`);
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`).pipe(
      map(json => ProdutoMapper.fromJson(json)),
      catchError(err => of())
    );
  }

  criar(produto: Produto): Observable<any> {
    let body = {
      title: produto.nome,
      price: produto.preco,
      description: produto.descricao,
      image: produto.imageURL,
      category: produto.categoria
    }

    return this.http.post(this.apiURL, body);
  }
}
