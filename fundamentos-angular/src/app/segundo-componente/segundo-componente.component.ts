import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segundo-componente',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [CommonModule], // Importa o CommonModule para habilitar o pipe uppercase
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Lucas";
  dataNascimento = "1995-04-23"; // Data de nascimento no formato ISO 8601
  urlImagem = "greylag-goose-7123574_1280.jpg"; // URL da imagem (Já está na pasta raíz dos assets, entre outros)

  mostrarDataNascimento() {
    alert('A data de nascimento do patinho Lucas é: ' + this.dataNascimento);
  }
}

