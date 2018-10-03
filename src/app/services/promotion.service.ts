import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Promotion } from '../shared/promotion';
//import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
    .pipe(map(dishes => dishes[0]));
  }
}
