import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoraliService, BoraliEvent } from '../../services/borali.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  svc = inject(BoraliService);
  bgLoaded = false;

  filterPills = ['Todos', '🎵 Música', '🎭 Teatro', '🎨 Arte', '🎬 Cinema', '💃 Dança', '🆓 Gratuitos'];
  activePill = 'Todos';

  ngOnInit() { setTimeout(() => this.bgLoaded = true, 100); }

  scrollToEvents() {
    document.getElementById('section-eventos')?.scrollIntoView({ behavior: 'smooth' });
  }

  filteredEvents(): BoraliEvent[] {
    const map: Record<string, string> = {
      '🎵 Música':'Música','🎭 Teatro':'Teatro','🎨 Arte':'Arte',
      '🎬 Cinema':'Cinema','💃 Dança':'Dança'
    };
    if (this.activePill === 'Todos') return this.svc.events;
    if (this.activePill === '🆓 Gratuitos') return this.svc.events.filter(e => e.isFree);
    const cat = map[this.activePill];
    return cat ? this.svc.events.filter(e => e.category === cat) : this.svc.events;
  }
}
