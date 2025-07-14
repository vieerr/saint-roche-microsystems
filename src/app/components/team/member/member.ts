import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-member',
  imports: [CommonModule, FaIconComponent],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member {
  @Input() name!: string;
  @Input() role!: string;
  @Input() skills: { name: string; icon: IconDefinition }[] = [];
}
