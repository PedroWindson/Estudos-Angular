import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent
  ],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importação do CommonModule

@Component({
  selector: 'app-formulario-avancado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Adicionado CommonModule
  templateUrl: './formulario-avancado.component.html',
  styleUrls: ['./formulario-avancado.component.css']
})
export class FormularioAvancadoComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
    }, { validators: this.validaSenhas });
  }

  validaSenhas(group: FormGroup): { [key: string]: boolean } | null {
    const senha = group.get('senha')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoConferem: true };
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Formulário enviado:', this.cadastroForm.value);
    } else {
      console.log('Formulário inválido');
      this.marcarCamposComoTocados();
    }
  }

  private marcarCamposComoTocados(): void {
    Object.keys(this.cadastroForm.controls).forEach(campo => {
      const controle = this.cadastroForm.get(campo);
      controle?.markAsTouched();
    });
  }
}
