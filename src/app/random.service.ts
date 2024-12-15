import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

    generateRandom(max: number): number {
        return Math.floor(Math.random() * (max + 1))
    }

    numberIsSmaller(number: number, max: number): boolean {
      return number <= 0.5 * max
    }
}
