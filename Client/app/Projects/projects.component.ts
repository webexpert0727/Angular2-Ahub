import { ProjectModel } from './../models/project.model';
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
    data: any[];
    temp: string;
    newProject: ProjectModel = new ProjectModel();
    storage: any[] = [];

    stored: any;
    constructor(public api: MockAPi, public router: Router) {
        this.stored = JSON.parse(localStorage.getItem('localStorage'); 
    }
    getData() {
        if (this.stored !== null) {
           this.data = this.stored;
        } else {
            this.api.getDataProject().then((data) => {
                this.data = data;
            });
        }
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

    postNewProject(newProject: any) {
        const item = {
            id: this.data.length + 1,
            name: newProject.name,
            exerpt: newProject.exerpt,
            runCount: 0,
            assetCount: 0
        }
        this.data.push(item);
        localStorage.setItem('localStorage', JSON.stringify(this.data));
        /*localStorage[''] = this.data;*/
    }
}
