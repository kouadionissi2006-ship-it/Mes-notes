import { Component } from '@angular/core';
import { NgFor} from '@angular/common';

@Component({
  imports: [ NgFor],
  selector: 'app-mes-notes',
  styleUrl: './mes-notes.css',
  templateUrl: './mes-notes.html',
})
export class MesNotes {
  notes = ['Composant', 'Route', 'Service'];

  ajouter(texte: string) {
    const t = texte.trim();
    if (t) {
      this.notes.push(t);
    }
  }
}
