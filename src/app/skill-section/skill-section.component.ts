import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss'],
})
export class SkillSectionComponent implements OnInit {
  skills = [
    'Java Script',
    'Angular',
    'HTML',
    'SCSS / SASS',
    'Scrum',
    'Git',
    'Desingt Thinking',
    'Rest API',
    'Test Automation',
    'Database',
  ];
  skillUrls = [
    'javascript',
    'angular',
    'html',
    'scss',
    'Scrum',
    'Git',
    'Desingthinking',
    'Restapi',
    'Testautomation',
    'Database',
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }
}
