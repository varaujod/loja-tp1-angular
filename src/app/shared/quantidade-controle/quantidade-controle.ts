import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantidade-controle',
  imports: [],
  templateUrl: './quantidade-controle.html',
  styleUrl: './quantidade-controle.css'
})
export class QuantidadeControle {
  //input --> [nome]
  //output --> (nome)
  // model --> [(contador)]
  contador = model<number>(0);

  decrementar(){
    this.contador.set(Math.max(0, this.contador() - 1));
  }

  incrementar(){
    this.contador.update(valor => valor + 1);
  }

}
