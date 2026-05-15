import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoraliService } from '../../services/borali.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  svc = inject(BoraliService);

  metricas = [
    { label: 'Eventos Salvos',  value: '12', sub: 'Seus favoritos da agenda.'      },
    { label: 'Agenda Cultural', value: '5',  sub: 'Eventos confirmados na semana.' },
    { label: 'Próximos a Você', value: '23', sub: 'Num raio de até 5 km.'          },
    { label: 'Interesses',      value: '4',  sub: 'Música, Arte, Cinema, Dança.'   },
  ];

  barData = [
    { label: 'Música', pct: '90%', color: '#E8431A', count: 18 },
    { label: 'Teatro', pct: '58%', color: '#2A5CFF', count: 11 },
    { label: 'Arte',   pct: '47%', color: '#C8A96E', count: 9  },
    { label: 'Dança',  pct: '30%', color: '#00BA71', count: 6  },
    { label: 'Cinema', pct: '20%', color: '#A35CFF', count: 4  },
  ];

  weekDays = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  heatmapData = [0,1,0,2,3,4,2,1,0,3,2,1,0,4,3,2,1,0,2,1,0,3,4,2,1,0,1,2,3,4,2,1,0,1,2];

  mlData = [
    { val: '91%', label: 'Acurácia', color: '#E8431A' },
    { val: '88%', label: 'Precisão', color: '#C8A96E' },
    { val: '85%', label: 'Recall',   color: '#00BA71' },
    { val: '86%', label: 'F1-Score', color: '#2A5CFF' },
  ];

  cellBg(v: number)     { const o = v === 0 ? 0.06 : v * 0.22; return `rgba(232,67,26,${o})`; }
  cellBorder(v: number) { const o = v === 0 ? 0.03 : v * 0.11; return `rgba(232,67,26,${o})`; }
}
