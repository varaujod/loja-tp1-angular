import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-header', // <app-header>
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() titulo: string = 'Angular Store';

  tituloLoja = input.required<string>(); // <app-header [tituloLoja]="'Loja TP1 Angular'"></app-header>

  textoSobre = output<string>();

  enviarSobre(){
    this.textoSobre.emit('Tecnicas de Programação I - Desenvolvido por Vinicius');
  }
}
