import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {CardModule} from "primeng/card";
import {JobOffer} from "../core/models/job-offer.model";
import {Subscription} from "rxjs";
import {JobOfferService} from "../core/services/job-offer.service";

@Component({
  selector: 'app-job-offer',
  standalone: true,
  imports: [
    CarouselModule,
    CardModule
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
  errorMessage!: string;


  ngOnInit(): void {
    this.subscriptions.push(this.getJobOffersSubscription$);

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => {
      if (s !== undefined){
        s.unsubscribe();
      }
    });
  }

  getAnOffer(){
    this.getJobOffersSubscription$ = this.jobOfferService.getJobOffers().subscribe({
      next : (data)=>{
        this.jobOffers = data;
      },
      error: (err)=>{
        this.errorMessage = err.message;
        console.log(err);
      }
    });
  }

}
