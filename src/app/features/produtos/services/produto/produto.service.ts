import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../../core/services/logger/logger.service';
import { Produto } from '../../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Desc. Produto 1111111111111111111111111111111111111111111111111111111111111111111',
      preco: 179.00,
      imageURL: 'images/logoifsp.png',
      promo: true
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Desc. Produto 2',
      preco: 179.00,
      estado: 'novo', 
      promo: true
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Desc. Produto 3',
      preco: 179.00,
      estado: 'esgotado',
      promo: true
    }
  ];

  listar(): Observable<Produto[]>{
    this.logger.info('[ProdutoService] - listando produtos');
    return of(this.listaMock).pipe(delay(1000));
  }
}
