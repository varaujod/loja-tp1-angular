import { Component, input, model, output, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { QuantidadeControle } from "../../../shared/quantidade-controle/quantidade-controle";
import { CurrencyPipe } from '@angular/common';
import { DescontoPipe } from '../../../shared/pipes/desconto-pipe';
import { TrucarPipe } from '../../../shared/pipes/trucar-pipe';

@Component({
  selector: 'app-card-produto',
  imports: [QuantidadeControle, CurrencyPipe, DescontoPipe, TrucarPipe],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  produto = input.required<Produto>();

  qtde = signal<number>(0);
  add = output<{id: number; quantidade: number}>();
  view = output<number>();

  onAdd(){
    this.add.emit({id: this.produto().id, quantidade: this.qtde()});
  }

  onView(){
    this.view.emit(this.produto().id);
  }
}
