import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoriaService } from '../services/categoria/categoria.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';

@Component({
  selector: 'lista-produtos',
  imports: [CommonModule, CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private categoriaService = inject(CategoriaService);
  private router = inject(Router);
  loading = signal(true);

  private produtos = toSignal<Produto[], Produto[]>(
    this.produtoService.listar().pipe(finalize(() => this.loading.set(false))),
    {initialValue: []}
  )

  categorias = toSignal<string[], string[]>(
    this.categoriaService.listar(),
    {initialValue: []}
  );

  categoriaSelecionada = signal<string>('');

  apenasPromo = signal(false);

  prodExibidos = computed(() => {
    let lista =  this.apenasPromo() ? this.produtos().filter(p => p.promo) : this.produtos();

    if(this.categoriaSelecionada()){
      lista = lista.filter(p => p.categoria === this.categoriaSelecionada());
    }

    return lista;
  });
    
  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada.set(categoria);
  }

  alternarPromo(){
    this.apenasPromo.update(p => !p);
  }

  onAddProduct(produto: { id: number, quantidade: number }){
    alert(`Produto ${produto.id}, ${produto.quantidade} unidades`);
  }

  onViewProduct(id: number){
    this.router.navigate(['/produtos', id]);
  }

  produtosValidos() {
    return this.produtos().filter(p => !(p.estado === 'esgotado' && p.promo));
  }
}
