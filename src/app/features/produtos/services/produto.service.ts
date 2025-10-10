import { inject, Injectable } from '@angular/core';
import { Produto } from '../../../model/produto';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { delay, Observable, ObservableInput, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private logger = inject(LoggerService);
  private readonly listaMock: Produto[] = [
    {
      id: 1,
      nome: 'A Vida Invisível de Addie Larue',
      descricao: 'Addie LaRue faz um pacto com o diabo para viver para sempre, mas é condenada a ser esquecida por todos que conhece. Séculos depois, ela encontra alguém que se lembra dela.',
      preco: 39.90,
      imageURL: 'public/images/a_vida_invisivel_de_addie_larue.jpg',
      promo: true,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'The Outsider',
      descricao: 'Um detetive investiga o assassinato brutal de um menino, apenas para descobrir que o suspeito, um respeitado membro da comunidade, tem um álibi inexplicável.',
      preco: 29.90,
      imageURL: 'public/images/the_outsider.jpg',
      promo: false,
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'O Vilarejo',
      descricao: 'Uma série de contos representando os sete pecados capitais explorando a natureza humana e suas falhas.',
      preco: 49.90,
      imageURL: 'public/images/o_vilarejo.jpg',
      promo: true,
      estado: 'novo'
    }
  ];

  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] listar()');
    return of(this.listaMock).pipe(delay(250));
  }

  getById(id: number): Observable<Produto | undefined>{
    return of(this.listaMock.find(p => id == id))//pipe(delay(500));
  }
}