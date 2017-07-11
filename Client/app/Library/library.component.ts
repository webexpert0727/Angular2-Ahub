import { Component } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { RunnerModel } from '../models/runner.model';
import { ProjectModel } from '../models/project.model';
import { LibraryItemModel } from '../models/library-item.model';

let projectList: ProjectModel[] =
    [{
        id: 1,
        name: "project 1"
    },
    {
        id: 2,
        name: "project 2"
    },
    {
        id: 3,
        name: "project 3"
    }];

let categoryList: CategoryModel[] = [{

    id: 1,
    name: "category 1"
},
{
    id: 2,
    name: "category 2"
},
{
    id: 3,
    name: "category 3"
}];

let runnerList: RunnerModel[] = [{

    id: 1,
    name: "runner 1",
    thumbnailUrl: "qwerty1"
},
{
    id: 2,
    name: "runner 2",
    thumbnailUrl: "qwerty2"
},
{
    id: 3,
    name: "runner 3",
    thumbnailUrl: "qwerty3"
}];

let libraryList: LibraryItemModel[] =
    [{
        id: 1,
        name: "Bob",
        itemUrl: "itemUrl 1",
        thumbnailUrl: "thumbnailUrl 1",
        authorId: 1,
        authorUsername: "authorUsername 1",
        authorAvatarUrl: "authorAvatarUrl l",
        exerpt: "exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 ",
        content: "content1",
        version: "version1",
        sourceCodeUrl: "sourceCodeUrl 1",
        categories: categoryList,
        runners: runnerList,
        projects: projectList,
        runCount: runnerList.length,
        projectCount: projectList.length,
        isDownloaded: true
    },
        {
            id: 2,
            name: "Vallie",
            itemUrl: "itemUrl 2",
            thumbnailUrl: "thumbnailUrl 2",
            authorId: 2,
            authorUsername: "authorUsername 2",
            authorAvatarUrl: "authorAvatarUrl 2",
            exerpt: "exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 ",
            content: "content2",
            version: "version2",
            sourceCodeUrl: "sourceCodeUrl 2",
            categories: categoryList,
            runners: runnerList,
            projects: projectList,
            runCount: runnerList.length,
            projectCount: projectList.length,
            isDownloaded: false
        }
        ]

@Component({
    selector: 'appc-library',
    styleUrls: ['./library.component.scss'],
    templateUrl: './library.component.html'
})
export class LibraryComponent {
    dataCategory: any;
    dataRunner: any;
    data: any;
    getData(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(libraryList);
        });
    }


    getRunners(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(runnerList);
        });
    }

    getCategory(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(categoryList);
        });
    }

    constructor() {
        this.getData().then((data) => {
            this.data = data;
        });
        this.getRunners().then((dataRunner) => {
            this.dataRunner = dataRunner;
        });
        this.getCategory().then((dataCategory) => {
            this.dataCategory = dataCategory;
        });
    }

}