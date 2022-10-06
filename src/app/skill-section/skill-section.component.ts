import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent implements OnInit {
  skills = ['Angular', 'HTML / CSS', 'Scrum', 'Git', 'Desingthinking', 'Restapi', 'Testautomation', 'Database'];
  skillUrls = ['Angular', 'htmlcss', 'Scrum', 'Git', 'Desingthinking', 'Restapi', 'Testautomation', 'Database']
  skillUrl = [];

  ngOnInit(): void {
    this.getSkillUrl();
  }

  getSkillUrl() {
    for (let index = 0; index < this.skillUrls.length; index++) {
      const skillUrl = this.skills[index];
    }
  }

}
