import { Injectable } from '@angular/core';

export interface BoraliEvent {
  key: string; icon: string; bg: string;
  title: string; sub: string; date: string;
  loc: string; price: string; intCount: string;
  category: string; distance: string;
  isFree: boolean; interested: number;
}

export interface AgendaItem {
  day: string; weekday: string; eventKey: string;
  tag: string; name: string; location: string;
  status: 'confirmed' | 'interest'; month: string;
}

export interface MapMarker {
  top: string; left: string;
  eventKey: string; label: string; pinClass: string;
}

export interface NearbyEvent {
  eventKey: string; icon: string; iconBg: string;
  name: string; sub: string; distance: string;
}

@Injectable({ providedIn: 'root' })
export class BoraliService {

  // Callbacks para o AppComponent controlar modal/toast/página
  onShowPage:  (page: string) => void = () => {};
  onOpenModal: (key: string)  => void = () => {};
  onShowToast: (msg: string)  => void = () => {};

  showPage(p: string)   { this.onShowPage(p); }
  openModal(k: string)  { this.onOpenModal(k); }
  showToast(m: string)  { this.onShowToast(m); }

  readonly events: BoraliEvent[] = [
    { key:'sarau',  icon:'🎵', bg:'linear-gradient(135deg,#2a0e04,#1a0a02)', title:'Sarau da Boa Vista',  sub:'Música ao vivo & cultura de raiz',     date:'Hoje, 03 de Julho · 19h–22h', loc:'Praça Maciel Pinheiro, Boa Vista',    price:'Entrada gratuita',      intCount:'142 interessados', category:'Música',    distance:'1,2 km', isFree:true,  interested:142 },
    { key:'teatro', icon:'🎭', bg:'linear-gradient(135deg,#0a0e1a,#0e1830)', title:'Teatro do Barroco',   sub:'Uma viagem ao período colonial',        date:'04 de Julho · 20h',           loc:'Teatro do Parque, Santo Antônio',    price:'R$ 25 | Meia R$ 12,50', intCount:'89 interessados',  category:'Teatro',    distance:'2,4 km', isFree:false, interested:89  },
    { key:'expo',   icon:'🎨', bg:'linear-gradient(135deg,#1a1400,#2a2200)', title:'Expo Mangue Beat',    sub:'Arte urbana pernambucana',              date:'05 a 20 de Julho',            loc:'Casa da Cultura, Recife Antigo',     price:'Entrada gratuita',      intCount:'310 interessados', category:'Arte',      distance:'1,8 km', isFree:true,  interested:310 },
    { key:'frevo',  icon:'💃', bg:'linear-gradient(135deg,#001a0e,#002a18)', title:'Baile de Frevo',      sub:'Patrimônio imaterial do mundo',         date:'Domingo, 06 Jul · 16h',       loc:'Marco Zero, Recife Antigo',          price:'Entrada gratuita',      intCount:'520 interessados', category:'Dança',     distance:'2,1 km', isFree:true,  interested:520 },
    { key:'cine',   icon:'🎬', bg:'linear-gradient(135deg,#0a001a,#140030)', title:'Cine Bairro – Várzea',sub:'Cinema ao ar livre gratuito',           date:'08 de Julho · 19h',           loc:'Praça da Várzea',                    price:'Entrada gratuita',      intCount:'78 interessados',  category:'Cinema',    distance:'3,0 km', isFree:true,  interested:78  },
    { key:'feira',  icon:'📚', bg:'linear-gradient(135deg,#1a0a14,#2a1020)', title:'Feira do Livro',      sub:'Literatura e cultura popular',          date:'10 Jul · 10h–20h',            loc:'SESC Piedade',                       price:'Entrada gratuita',      intCount:'203 interessados', category:'Literatura',distance:'1,5 km', isFree:true,  interested:203 },
  ];

  readonly agendaItems: AgendaItem[] = [
    { day:'03', weekday:'SEX', eventKey:'sarau',  tag:'Música', name:'Sarau da Boa Vista', location:'Praça Maciel Pinheiro · 19h',  status:'confirmed', month:'JULHO 2026'  },
    { day:'04', weekday:'SAB', eventKey:'teatro', tag:'Teatro', name:'Teatro do Barroco',  location:'Teatro do Parque · 20h',       status:'interest',  month:'JULHO 2026'  },
    { day:'05', weekday:'DOM', eventKey:'expo',   tag:'Arte',   name:'Expo Mangue Beat',   location:'Casa da Cultura · Dia inteiro',status:'confirmed', month:'JULHO 2026'  },
    { day:'12', weekday:'QUA', eventKey:'frevo',  tag:'Dança',  name:'Festival de Frevo',  location:'Marco Zero · 16h',             status:'interest',  month:'AGOSTO 2026' },
  ];

  readonly mapMarkers: MapMarker[] = [
    { top:'33%', left:'52%', eventKey:'sarau',  label:'Sarau da Boa Vista', pinClass:'pin-music'   },
    { top:'51%', left:'44%', eventKey:'expo',   label:'Casa da Cultura',    pinClass:'pin-art'     },
    { top:'38%', left:'64%', eventKey:'teatro', label:'Teatro do Parque',   pinClass:'pin-theater' },
    { top:'62%', left:'57%', eventKey:'frevo',  label:'Marco Zero',         pinClass:'pin-dance'   },
    { top:'25%', left:'38%', eventKey:'sarau',  label:'SESC Piedade',       pinClass:'pin-music'   },
    { top:'70%', left:'30%', eventKey:'cine',   label:'Praça da Várzea',    pinClass:'pin-cinema'  },
  ];

  readonly nearbyEvents: NearbyEvent[] = [
    { eventKey:'sarau',  icon:'🎵', iconBg:'linear-gradient(135deg,#2a0e04,#1a0a02)', name:'Sarau da Boa Vista', sub:'Praça Maciel Pinheiro · Hoje 19h · Gratuito', distance:'0,8 km' },
    { eventKey:'expo',   icon:'🎨', iconBg:'linear-gradient(135deg,#1a1400,#2a2200)', name:'Expo Mangue Beat',   sub:'Casa da Cultura · 5–20 Jul · Gratuito',       distance:'1,2 km' },
    { eventKey:'frevo',  icon:'💃', iconBg:'linear-gradient(135deg,#001a0e,#002a18)', name:'Baile de Frevo',     sub:'Marco Zero · Dom 16h · Gratuito',             distance:'1,9 km' },
    { eventKey:'teatro', icon:'🎭', iconBg:'linear-gradient(135deg,#0a0e1a,#0e1830)', name:'Teatro do Barroco',  sub:'Teatro do Parque · Jul 04 · R$ 25',           distance:'2,4 km' },
  ];

  getEvent(key: string): BoraliEvent | undefined {
    return this.events.find(e => e.key === key);
  }
}
