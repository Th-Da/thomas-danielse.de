import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent implements OnInit {
  skills = ['Javascript', 'Angular', 'HTML / CSS', 'Scrum', 'Git', 'Desingthinking', 'Restapi', 'Testautomation', 'Database'];
  skillUrls = ['Javascript', 'Angular', 'htmlcss', 'Scrum', 'Git', 'Desingthinking', 'Restapi', 'Testautomation', 'Database'];



  ngOnInit(): void {

  }
}
