import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoraliService } from '../../services/borali.service';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criar.component.html',
})
export class CriarComponent {
  svc = inject(BoraliService);

  form = { nome:'', data:'', hora:'', categoria:'Música', preco:'', local:'', descricao:'' };

  publicar() {
    this.svc.showToast('✓ Evento publicado com sucesso!');
    this.form = { nome:'', data:'', hora:'', categoria:'Música', preco:'', local:'', descricao:'' };
  }
}
