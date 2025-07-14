import { Component } from '@angular/core';
import { Member } from './member/member';
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import {
  faCode,
  faCropSimple,
  faDatabase,
  faHardDrive,
  faRuler,
  faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import Aos from 'aos';

interface TeamMember {
  name: string;
  role: string;
  skills: {
    name: string;
    icon: IconDefinition;
  }[];
}

@Component({
  selector: 'app-team',
  imports: [Member, FontAwesomeModule, CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  ngOnInit() {
    Aos.init();
  }
  constructor() {
    library.add(
      faCode,
      faDatabase,
      faHardDrive,
      faCropSimple,
      faRuler,
      faRulerCombined
    );
  }
  faCode = faCode;
  faDatabase = faDatabase;
  faHardDrive = faHardDrive;
  faCropSimple = faCropSimple;
  faRuler = faRuler;
  faRulerCombined = faRulerCombined;
  // Team members array
  teamMembers: TeamMember[] = [
    {
      name: 'Olivier Paspuel',
      role: 'CTO & CEO',
      skills: [
        { name: 'JavaScript', icon: this.faCode },
        { name: 'React', icon: this.faDatabase },
        { name: 'Node.js', icon: this.faHardDrive },
      ],
    },
    {
      name: 'Frederick Tipán',
      role: 'UI/UX Designer & Frontend Developer',
      skills: [
        { name: 'Figma', icon: this.faCropSimple },
        { name: 'Adobe XD', icon: this.faRuler },
        { name: 'Sketch', icon: this.faRulerCombined },
      ],
    },
    {
      name: 'Carlos Hernández',
      role: 'Data Analyst',
      skills: [
        { name: 'Python', icon: this.faCode },
        { name: 'SQL', icon: this.faDatabase },
        { name: 'TensorFlow', icon: this.faHardDrive },
      ],
    },
    {
      name: 'Antonio Revilla',
      role: 'QA Tester',
      skills: [
        { name: 'Selenium', icon: this.faCode },
        { name: 'Jest', icon: this.faDatabase },
        { name: 'Cypress', icon: this.faHardDrive },
      ],
    },
  ];

  // Timeline items
  timelineItems = [
    {
      year: '2022',
      content:
        'Mientras estudiabamos en la Universidad de las Fuerzas Armadas ESPE, los fundadores de Saint Roche Microsystems se conocieron y comenzaron a colaborar en proyectos de software.',
    },
    {
      year: '2025',
      content:
        'En 2025, Saint Roche Microsystems se estableció oficialmente como una empresa de desarrollo de software, enfocándose en crear soluciones innovadoras y accesibles para empresas y desarrolladores.',
    },
    {
      year: '2027',
      content:
        'En 2027, la empresa creció y se expandió, lanzando varios productos exitosos y estableciendo una sólida reputación en la industria del software.',
    },
    {
      year: '2030',
      content:
        'En 2030, Saint Roche Microsystems se posicionó como un líder en el desarrollo de software, con un equipo talentoso y una visión clara para el futuro.',
    },
  ];
}
