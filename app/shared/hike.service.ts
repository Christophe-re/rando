import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

import { Hike } from './hike';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class HikeService {
    hikes: Hike[] = [
        {
            "name": "Saint-Aubin-du-Cormier",
            "region": "Bretagne",
            "area": "Ille-et-Vilaine",
            "startingPoint": "Plan d'eau",
            "distance": 12.8,
            "distanceUnit": "km",
            "duration": 240,
            "heightDifference": 267,
            "description": "Randonnée sympa, à démarrer par le plan d'eau pour finir sur les hauteurs de Saint Aubin. Rochers imposants et des arbres magnifiques sont effectivement au rendez-vous. Bonne balade",
            "evalution": [4, 5, 3]
        },
        {
            "name": "Vallée du Couesnon",
            "region": "Bretagne",
            "area": "Ille-et-Vilaine",
            "startingPoint": "Château de la ville olivier",
            "distance": 15.6,
            "distanceUnit": "km",
            "duration": 270, 
            "heightDifference": 200,
            "description": "Il faut être en forme pour cette rando car il y a beaucoup de dénivelés. Mais le jeu en vaut la chandelle car admirer les bords du Couesnon est un régal. Bonne randonnée ",
            "evalution": [5, 5]
        }
    ];

    constructor(private _http:Http) {
        
    }

    getHikes() {
        return this.hikes;
    }

    getHikesFromAPI() {
        return this._http.get('app/api/hikes.json')
            .do(x => console.log(x))
            .map(hikes => hikes.json());
    }
}