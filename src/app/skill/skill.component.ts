import { Component, Input } from '@angular/core';
import { Skill } from '../data/Skill';
import { ActivatedRoute } from '@angular/router';
import { SkillService } from '../service/SkillService';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skill: any = null;
  skillName: string | null = null;

  constructor(private skillService: SkillService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.skillName = params.get('skillName');
      // use the userId as needed
    });
    this.skill = {
      id: '1',
      name: 'Words'
    }
  }
}
