import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule
import { CicloDeVidaComponent } from '../ciclo-de-vida/ciclo-de-vida.component'; // Importação do componente filho

@Component({
  selector: 'app-ciclo-de-vida-pai',
  standalone: true, // Componente standalone
  imports: [FormsModule, CicloDeVidaComponent], // Importação do FormsModule e do componente filho
  templateUrl: './ciclo-de-vida-pai.component.html',
  styleUrl: './ciclo-de-vida-pai.component.css'
})
export class CicloDeVidaPaiComponent {
  texto = "";
}
