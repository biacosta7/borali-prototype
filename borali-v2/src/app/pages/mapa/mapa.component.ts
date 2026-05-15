import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoraliService } from '../../services/borali.service';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa.component.html',
})
export class MapaComponent {
  svc = inject(BoraliService);
}
