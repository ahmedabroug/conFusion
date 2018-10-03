import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
//import { delay } from 'rxjs/operators';

import { Leader } from '../shared/leader';
//import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    return  this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
    .pipe(map(dishes => dishes[0]));
  }
}
