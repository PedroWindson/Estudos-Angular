import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação do CommonModule

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() titulo = "";
  @Input() cor = "#ccc";
}
