import { Component } from '@angular/core';
import { Skill } from '../data/Skill';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SkillService } from '../service/SkillService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillStore } from '../store/skill-store';
@Component({
  selector: 'app-knowledge-area',
  templateUrl: './knowledge-area.component.html',
  styleUrls: ['./knowledge-area.component.scss']
})
export class KnowledgeAreaComponent {
  skillStore: SkillStore;
  knowledgeArea: string | null = null;
  addedId: any = ''
  myForm = new FormGroup({
    name: new FormControl(''),
  });
  

  constructor(private skillService: SkillService, private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
      this.skillStore = new SkillStore();
    }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.knowledgeArea = params.get('knowledgeArea');
      // use the userId as needed
    });
    this.skillService.all().subscribe((response) => {
      this.skillStore.updateData(response);
    });
  }

  get allSkills() {
    return this.skillStore.data;
  }

  onSubmit() {
    this.skillService.add(this.myForm.value.name as String).subscribe((response) => {
      this.myForm.reset();
      let addedSkill = response as Skill;
      this.skillStore.append(addedSkill);
      this.openSnackBar('Added new Skill: ' + addedSkill.id + ' ' + addedSkill.name);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000 // set the duration in milliseconds
    });
  }
}
