import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
