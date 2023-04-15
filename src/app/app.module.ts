import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnowledgeAreasComponent } from './knowledge-areas/knowledge-areas.component';
import { SkillComponent } from './skill/skill.component';
import { HttpClientModule } from '@angular/common/http';
import { KnowledgeAreaComponent } from './knowledge-area/knowledge-area.component';
import { GoBackComponent } from './go-back/go-back.component';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgeAreasComponent,
    SkillComponent,
    KnowledgeAreaComponent,
    GoBackComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
