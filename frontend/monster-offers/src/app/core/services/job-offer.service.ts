import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {JobOffer} from "../models/job-offer.model";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http: HttpClient) {
  }

  public getAnOffer(): Observable<JobOffer> {
    return this.http.get<JobOffer>(environment.offerBackendHost);
  }
}
