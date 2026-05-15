import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoraliService, BoraliEvent } from './services/borali.service';
import { HomeComponent } from './pages/home/home.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { CriarComponent } from './pages/criar/criar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    CommonModule,
    HomeComponent,
    MapaComponent,
    AgendaComponent,
    CriarComponent,
    DashboardComponent,
    PerfilComponent,
  ]
})
export class AppComponent implements OnInit {

  page = 'home';

  // Cursor
  cursorX = 0; cursorY = 0;
  ringX = 0;   ringY = 0;
  cursorHover = false;
  private ringTimer: any;

  // Modal
  modalOpen = false;
  modalEvent: BoraliEvent | null = null;

  // Toast
  toastVisible = false;
  toastMsg = '';
  private toastTimer: any;

  constructor(public svc: BoraliService) {}

  ngOnInit() {
    this.svc.onShowPage  = (p) => this.showPage(p);
    this.svc.onOpenModal = (k) => this.openModal(k);
    this.svc.onShowToast = (m) => this.showToast(m);
  }

  showPage(p: string) {
    this.page = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    clearTimeout(this.ringTimer);
    this.ringTimer = setTimeout(() => {
      this.ringX = e.clientX;
      this.ringY = e.clientY;
    }, 60);
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(e: MouseEvent) {
    const el = e.target as HTMLElement;
    this.cursorHover = !!el.closest('a, button, .event-card, .filter-pill, .map-marker, .nearby-card, .agenda-item');
  }

  openModal(key: string) {
    const ev = this.svc.getEvent(key);
    if (ev) { this.modalEvent = ev; this.modalOpen = true; }
  }

  closeModal() { this.modalOpen = false; }

  onOverlayClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }

  addToAgenda() {
    this.showToast('✓ Salvo na sua agenda!');
    this.closeModal();
  }

  showToast(msg: string) {
    this.toastMsg = msg;
    this.toastVisible = true;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastVisible = false, 2400);
  }
}
