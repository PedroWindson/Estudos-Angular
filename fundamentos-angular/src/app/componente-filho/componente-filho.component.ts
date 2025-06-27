import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule

@Component({
  selector: 'app-componente-filho',
  standalone: true, // Componente standalone
  imports: [FormsModule], // Importação do FormsModule aqui
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})
export class ComponenteFilhoComponent {
  @Input() sobrenome = "";
  @Output() mostraNome = new EventEmitter();

  nome = "";
}
