import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeAreasComponent } from './knowledge-areas/knowledge-areas.component';
import { SkillComponent } from './skill/skill.component';
import { AppComponent } from './app.component';
import { KnowledgeAreaComponent } from './knowledge-area/knowledge-area.component';

const routes: Routes = [
  { path: 'knowledgeareas', component: KnowledgeAreasComponent, pathMatch: 'full' },
  { path: 'knowledgearea/:knowledgeArea', component: KnowledgeAreaComponent},
  { path: 'knowledgearea/:knowledgeArea/skill/:skillName', component: SkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
