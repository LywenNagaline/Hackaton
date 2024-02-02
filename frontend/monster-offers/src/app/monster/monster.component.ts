import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent {
  @Input() exp: string =''; // La valeur de l'expérience requise reçue depuis le composant parent
  colors = new Map(); // On va associer chaque niveau d'expérience à une couleur
  color = ""; // La couleur correspondant au niveau d'expérience indiqué sur l'offre

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
  noseRand = 0;

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

  constructor() {
    // On crée la map Expérience -> Couleur
    this.colors.set('Débutant', 'blue');
    this.colors.set('Expérimenté', 'yellow');
    this.colors.set('Sénior', 'green');
  }

  ngOnInit(){
    // On récupère la couleur associée à l'expérience demandée dans l'annonce
    this.color = this.colors.get(this.exp);

    // On initie les urls dynamiques des différentes parties du corps du monstre
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
      `eye_${this.color}`,
      'eye_dead',
      'eye_closed_happy',
      'eye_closed_feminine'
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

    // On choisit de façon aléatoire une url pour chaque catégorie
    this.antennaRand = Math.floor(Math.random()*this.antennas.length);
    this.armRand = Math.floor(Math.random()*this.arms.length);
    this.bodyRand = Math.floor(Math.random()*this.bodies.length);
    this.earRand = Math.floor(Math.random()*this.ears.length);
    this.eyeRand = Math.floor(Math.random()*this.eyes.length);
    this.legRand = Math.floor(Math.random()*this.legs.length);
    this.mouthRand = Math.floor(Math.random()*this.mouths.length);
    this.noseRand = Math.floor(Math.random()*this.noses.length);

    console.log(this.color);
  }
}
