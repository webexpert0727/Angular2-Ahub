import { Router } from '@angular/router';
import { MockAPi } from './../mock.api';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'appc-projects',
    styleUrls: ['./projects.component.scss'],
    templateUrl: './projects.component.html'
})

export class ProjectsComponent implements OnInit {
    dataCategory: any;
    dataRunner: any;
    data: any = [];
    temp: string;
    constructor(public api: MockAPi, public router: Router) { }

    getData() {
        this.api.getDataProject().then((data) => {
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
    goToProjectDetails(id: string) {
        this.router.navigate(['projects', id]);
    }
}
