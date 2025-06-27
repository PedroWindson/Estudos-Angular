import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../logger.service'; // Certifique-se de importar o LoggerService

@Component({
  selector: 'app-exemplo-servicos2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exemplo-servicos2.component.html',
  styleUrl: './exemplo-servicos2.component.css'
})
export class ExemploServicos2Component {
  descricao = "";

  constructor(public logger: LoggerService) {}

  adicionarProduto() {
    this.logger.logar(`O produto ${this.descricao} foi adicionado!`);
    this.descricao = ""; // Limpa o campo de entrada após adicionar o produto
  }
}
