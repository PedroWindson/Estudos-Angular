import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { PipeCustomizadoComponent } from "./pipe-customizado/pipe-customizado.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { RenderizandoListasComponent } from "./renderizando-listas/renderizando-listas.component";
import { ComponentePersonalizadoComponent } from "./componente-personalizado/componente-personalizado.component";
import { ComponentePaiComponent } from "./componente-pai/componente-pai.component";
import { ExemploServicos1Component } from "./exemplo-servicos1/exemplo-servicos1.component";
import { ExemploServicos2Component } from "./exemplo-servicos2/exemplo-servicos2.component";
import { CicloDeVidaComponent } from "./ciclo-de-vida/ciclo-de-vida.component";
import { CicloDeVidaPaiComponent } from "./ciclo-de-vida-pai/ciclo-de-vida-pai.component";
import { CardComponent } from "./card/card.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioAvancadoComponent } from "./formulario-avancado/formulario-avancado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeiroComponenteComponent, SegundoComponenteComponent, PipeCustomizadoComponent, TwoWayDataBindingComponent, RenderizandoListasComponent, RenderizandoListasComponent, ComponentePersonalizadoComponent, ComponentePaiComponent, ExemploServicos1Component, ExemploServicos2Component, CicloDeVidaComponent, CicloDeVidaPaiComponent, CardComponent, FormularioAvancadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
