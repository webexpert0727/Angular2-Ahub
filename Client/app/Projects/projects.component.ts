import { Component } from '@angular/core';
import { CategoryModel } from '../models/category.model';
//import { RunnerModel } from '../models/runner.model';
import { ProjectModel } from '../models/project.model';

let categoryList: CategoryModel[] = [{
    id: 1,
    name: "Agriculture"
},
{
    id: 2,
    name: "Finance"
}];

let projectList: ProjectModel[] =
    [{
        id: 1,
        name: "Project Name 1",
        exerpt: "exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 ",
        dateAdded: Date.now,
        categories: categoryList,
        category: "Agriculture",
        runCount: 3,
        assetCount: 6
    },
    {
        id: 2,
        name: "Project Name 2",
        exerpt: "exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 exerpt2 exrpt2 ",
        categories: categoryList,
        category: "Finance",
        dateAdded: Date.now,
        runCount: 3,
        assetCount: 6
    },
    {
        id: 3,
        name: "Project Name 3",
        exerpt: "exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 exerpt3 ",
        dateAdded: Date.now,
        categories: categoryList,
        category: "Agriculture",
        runCount: 3,
        assetCount: 6
    }];

@Component({
    selector: 'appc-projects',
    styleUrls: ['./projects.component.scss'],
    templateUrl: './projects.component.html'
})

export class ProjectsComponent {
    dataCategory: any;
    data: any;
    temp: string;

    getData(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(projectList);
        });
    }

    getCategory(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(categoryList);
        });
    }

    constructor() {
        this.temp = "";
        this.getData().then((data) => {
            this.data = data;
        });        
        this.getCategory().then((dataCategory) => {
            this.dataCategory = dataCategory;
        });
    }
    changeTemp(t: string) {
        this.temp = t;        
    }
}