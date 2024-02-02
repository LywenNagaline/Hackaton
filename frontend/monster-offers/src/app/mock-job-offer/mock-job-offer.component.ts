import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {CardModule} from "primeng/card";
import {JobOffer} from "../core/models/job-offer.model";
import {Subscription} from "rxjs";
import {JobOfferService} from "../core/services/job-offer.service";
import {MonsterComponent} from "../monster/monster.component";

@Component({
  selector: 'app-mock-job-offer',
  standalone: true,
  imports: [
    CarouselModule,
    CardModule,
    MonsterComponent
  ],
  templateUrl: './mock-job-offer.component.html',
  styleUrl: './mock-job-offer.component.css'
})
export class MockJobOfferComponent {
  constructor(private jobOfferService: JobOfferService ) {
  }

  jobOffers: Array<JobOffer> = [
    {"id": 1, "title":"Hôte / Hôtesse d'accueil","creationDate":"01/02/2024","department":"31 - CAZERES","requiredExperience":"Débutant"},
    {"id": 2, "title":"Secrétaire médical / médicale (H/F)","creationDate":"24/01/2024","department":"31 - QUINT FONSEGRIVES","requiredExperience":"Expérimenté"},
    {"id": 3, "title":"ENCADRANT TECHNIQUE SECOND OEUVRE BATIMENT  (H/F)","creationDate":"12/01/2024","department":"31 - AUTERIVE","requiredExperience":"Sénior"},
    {"id": 4, "title":"Hôte / Hôtesse d'accueil","creationDate":"01/02/2024","department":"31 - CAZERES","requiredExperience":"Débutant"},
    {"id": 5, "title":"Secrétaire médical / médicale (H/F)","creationDate":"24/01/2024","department":"31 - QUINT FONSEGRIVES","requiredExperience":"Expérimenté"},
    {"id": 6, "title":"ENCADRANT TECHNIQUE SECOND OEUVRE BATIMENT  (H/F)","creationDate":"12/01/2024","department":"31 - AUTERIVE","requiredExperience":"Sénior"},
    {"id": 7, "title":"Hôte / Hôtesse d'accueil","creationDate":"01/02/2024","department":"31 - CAZERES","requiredExperience":"Débutant"},
    {"id": 8, "title":"Secrétaire médical / médicale (H/F)","creationDate":"24/01/2024","department":"31 - QUINT FONSEGRIVES","requiredExperience":"Expérimenté"},
    {"id": 9, "title":"ENCADRANT TECHNIQUE SECOND OEUVRE BATIMENT  (H/F)","creationDate":"12/01/2024","department":"31 - AUTERIVE","requiredExperience":"Sénior"},
    {"id": 10, "title":"Hôte / Hôtesse d'accueil","creationDate":"01/02/2024","department":"31 - CAZERES","requiredExperience":"Débutant"},
  ];
  subscriptions: Subscription[] = []
  getJobOffersSubscription$!: Subscription;


  ngOnInit(): void {
    /* this.subscriptions.push(this.getJobOffersSubscription$);
    this.getJobOffers(); */

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => {
      if (s !== undefined){
        s.unsubscribe();
      }
    });
  }

  getJobOffers(){
    this.getJobOffersSubscription$ = this.jobOfferService.getJobOffers().subscribe({
      next : (data)=>{
        this.jobOffers = data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }
}
