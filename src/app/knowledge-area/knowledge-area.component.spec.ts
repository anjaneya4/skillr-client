import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeAreaComponent } from './knowledge-area.component';

describe('KnowledgeAreaComponent', () => {
  let component: KnowledgeAreaComponent;
  let fixture: ComponentFixture<KnowledgeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
