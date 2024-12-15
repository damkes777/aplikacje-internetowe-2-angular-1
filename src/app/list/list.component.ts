import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-list',
    imports: [
        FormsModule,
        NgForOf
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {
    inputValue: string = '';
    list: string[] = [];

    addToList(): void {
        if (this.inputValue) {
            this.list.push(this.inputValue)
            this.inputValue = ''
        }
    }

    remove(index: number): void {
        this.list.splice(index, 1)
    }
}
