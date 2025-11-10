import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../../core/services/logger/logger.service';
import { Produto } from '../../../../model/produto';
import { map, Observable, of } from 'rxjs';
import { ProdutoService } from '../produto/produto.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  logger = inject(LoggerService);

  private produtoService = inject(ProdutoService);

  listar(): Observable<string[]>{
    return this.produtoService.listar().pipe(
      map(produtos => {
        const categorias = produtos
        .map(p => p.categoria)
        .filter((cat): cat is string => typeof cat === 'string');
        return Array.from(new Set(categorias));
      })
    );
  }
}