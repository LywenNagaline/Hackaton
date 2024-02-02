import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {CardModule} from "primeng/card";
import {JobOffer} from "../core/models/job-offer.model";
import {Subscription} from "rxjs";
import {JobOfferService} from "../core/services/job-offer.service";
import {MonsterComponent} from "../monster/monster.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-job-offer',
  standalone: true,
  imports: [
    CarouselModule,
    CardModule,
    MonsterComponent,
    NavbarComponent
  ],
  templateUrl: './job-offer.component.html',
  styleUrl: './job-offer.component.css'
})
export class JobOfferComponent implements OnInit, OnDestroy{

  constructor(private jobOfferService: JobOfferService ) {
  }

  jobOffers: Array<JobOffer> = [];
  subscriptions: Subscription[] = []
  getJobOffersSubscription$!: Subscription;


  ngOnInit(): void {
    this.subscriptions.push(this.getJobOffersSubscription$);
    this.getJobOffers();

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
