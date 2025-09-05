import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
  {
    id: 1,
    nome: 'Produto 1',
    descricao: 'Desc. Produto 1',
    preco: 179.00,
    imageURL: 'images/logoifsp.png',
    // promo: true
  },
  {
    id: 2,
    nome: 'Produto 2',
    descricao: 'Desc. Produto 2',
    preco: 179.00,
    estado: 'esgotado'
  },
  {
    id: 3,
    nome: 'Produto 3',
    descricao: 'Desc. Produto 3',
    preco: 179.00,
    estado: 'novo'
  }
  ]

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo) : this.produtos);

  alternarPromo(){
    this.apenasPromo.update(p => !p);
  }

  onAddProduct(produto: { id: number, quantidade: number }){
    alert(`Produto ${produto.id}, ${produto.quantidade} unidades`);
  }

  onViewProduct(id: number){
    alert(`Id do produto: ${id}`);
  }
}
