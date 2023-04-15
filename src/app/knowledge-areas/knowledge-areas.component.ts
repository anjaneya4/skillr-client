import { Component } from '@angular/core';
import { KnowledgeAreas } from '../data/knowledgeArea';


@Component({
  selector: 'app-knowledge-areas',
  templateUrl: './knowledge-areas.component.html',
  styleUrls: ['./knowledge-areas.component.scss']
})
export class KnowledgeAreasComponent {
  knowledgeAreas: KnowledgeAreas[] = [
    {
      id: "1",
      name: "Vocabulary"
    },
    {
      id: "2",
      name: "General Knowledge"
    },
    {
      id: "3",
      name: "Finance"
    }
  ]
}
