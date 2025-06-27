import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-personalizado',
  imports: [],
  templateUrl: './componente-personalizado.component.html',
  styleUrl: './componente-personalizado.component.css'
})
export class ComponentePersonalizadoComponent {
  @Input() nome = ""
  @Input() sobrenome = "";

  //Colocando o nome completo (nome --ESPAÇO-- sobrenome)
  get nomeCompleto(){
    return this.nome + " " + this.sobrenome;
  }

}
