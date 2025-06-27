import { Component } from '@angular/core';
import { Celular } from '../types/Celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-renderizando-listas',
  standalone: true, // Componente standalone
  imports: [CommonModule], // Importação do CommonModule para usar *ngFor
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: 'iPhone 14', descricao: 'Celular da Apple', esgotado: false },
    { id: 2, nome: 'Galaxy S21', descricao: '', esgotado: false },
    { id: 3, nome: 'Pixel 6', descricao: 'Celular do Google', esgotado: true }
  ];
}
