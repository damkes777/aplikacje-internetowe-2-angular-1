import {Component, Input, OnInit} from '@angular/core';
import {RandomService} from "../random.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-random',
    imports: [
        NgClass
    ],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent implements OnInit {
    @Input() max: number = 100
    randomNumber: number;
    isSmaller: boolean;

    constructor(private randomService: RandomService) {
        this.randomNumber = this.randomService.generateRandom(this.max)
        this.isSmaller = this.randomService.numberIsSmaller(this.randomNumber, this.max)
    }

    ngOnInit(): void {

    }

    generateNumer(): void {
        this.randomNumber = this.randomService.generateRandom(this.max)
        this.isSmaller = this.randomService.numberIsSmaller(this.randomNumber, this.max)
    }
}
