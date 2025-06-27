import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule

@Component({
  selector: 'app-two-way-data-binding',
  standalone: true, // Componente standalone
  imports: [FormsModule], // Importação do FormsModule aqui
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {
  nome = "";
}
