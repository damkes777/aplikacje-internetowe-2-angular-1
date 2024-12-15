import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RandomComponent} from "./random/random.component";
import {ListComponent} from "./list/list.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RandomComponent, ListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'AiLab3';
}
