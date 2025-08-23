import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";
import { Banner } from './core/banner/banner';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
