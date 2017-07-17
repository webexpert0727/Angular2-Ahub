import { MockAPi } from './../mock.api';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-library',
    styleUrls: ['./library.component.scss'],
    templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit {
    dataCategory: any;
    dataRunner: any;
    data: any;
    temp: string;
    constructor(public api: MockAPi) { }
    getData() {
        this.api.getDataLibrary().then((data) => {
            this.data = data;
        });
    }
    getRunners() {
        this.api.getRunners().then((dataRunner) => {
            this.dataRunner = dataRunner;
        });
    }

    getCategory() {
        this.api.getCategory().then((dataCategory) => {
            this.dataCategory = dataCategory;
        });

    }
    ngOnInit() {
        this.temp = '';
        this.getData();
        this.getRunners();
        this.getCategory();

    }

    changeTemp(t: string) {
        this.temp = t;
    }

}
