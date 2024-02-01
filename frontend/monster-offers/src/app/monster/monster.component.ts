import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent {
  colors = ['blue', 'green', 'yellow'];
  color = "";
  test = "";

  antennas: string[] = [];
  antennaRand = 0;

  arms: string[] = [];
  armRand = 0;

  bodies: string[] = [];
  bodyRand = 0;

  ears: string[] = [];
  earRand = 0;

  eyes: string[] = [];
  eyeRand = 0;

  legs: string[] = [];
  legRand = 0;

  noses: string[] = [];

  mouths = [
    'mouthA',
    'mouthB',
    'mouthC',
    'mouthD',
    'mouthE',
    'mouthF',
    'mouthG',
    'mouthH',
    'mouthI',
    'mouthJ',
  ];
  mouthRand = 0;

  ngOnInit(){
    this.color = this.colors[Math.floor(Math.random()*3)];
    this.antennas = [
      `detail_${this.color}_antenna_large`, 
      `detail_${this.color}_antenna_small`
    ];
    this.arms = [
      `arm_${this.color}A`, 
      `arm_${this.color}B`, 
      `arm_${this.color}C`, 
      `arm_${this.color}D`,
      `arm_${this.color}E`,
    ];
    this.bodies = [
      `body_${this.color}A`, 
      `body_${this.color}B`, 
      `body_${this.color}C`, 
      `body_${this.color}D`,
      `body_${this.color}E`,
      `body_${this.color}F`,
    ];
    this.ears = [
      `detail_${this.color}_ear]`,
      `detail_${this.color}_ear_round]`,
    ];
    this.eyes = [
      `eye_angry_${this.color}`,
      `eye_${this.color}`,
      `eye_human_${this.color}`,
    ];
    this.legs = [
      `leg_${this.color}A`,
      `leg_${this.color}B`,
      `leg_${this.color}C`,
      `leg_${this.color}D`,
      `leg_${this.color}E`,
    ];
    this.noses = [
      `nose_${this.color}`,
    ];
    this.antennaRand = Math.floor(Math.random()*this.antennas.length);
    this.armRand = Math.floor(Math.random()*this.arms.length);
    this.bodyRand = Math.floor(Math.random()*this.bodies.length);
    this.earRand = Math.floor(Math.random()*this.ears.length);
    this.eyeRand = Math.floor(Math.random()*this.eyes.length);
    this.legRand = Math.floor(Math.random()*this.legs.length);
    this.mouthRand = Math.floor(Math.random()*this.mouths.length);

    console.log(this.color);
  }
}
