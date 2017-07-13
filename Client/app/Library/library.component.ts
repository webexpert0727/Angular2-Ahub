import { Component } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { RunnerModel } from '../models/runner.model';
import { ProjectModel } from '../models/project.model';
import { LibraryItemModel } from '../models/library-item.model';

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
    name: "project 1",
    exerpt: "",
    categories: categoryList
},
{
    id: 2,
    name: "project 2",
    exerpt: "",
    categories: categoryList
},
{
    id: 3,
    name: "project 3",
    exerpt: "",
    categories: categoryList
}];

let runnerList: RunnerModel[] = [{

    id: 1,
    name: "Docker",
    thumbnailUrl: "qwerty1"
},
{
    id: 2,
    name: "Java",
    thumbnailUrl: "qwerty2"
},
{
    id: 3,
    name: "Python",
    thumbnailUrl: "qwerty3"
}];

let libraryList: LibraryItemModel[] =
    [
        {
        id: 1,
        name: "New Test 1",
        itemUrl: "Finance",
        thumbnailUrl: "thumbnailUrl 1",
        authorId: 1,
        authorUsername: "@author1",
        authorAvatarUrl: "authorAvatarUrl l",
        exerpt: "exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 ",
        content: "content1",
        version: "1.0.1",
        sourceCodeUrl: "sourceCodeUrl 1",
        categories: categoryList,
        runners: runnerList,
        projects: projectList,
        runCount: runnerList.length,
        projectCount: projectList.length,
        isDownloaded: true
    },
<<<<<<< HEAD
        {
            id: 2,
            name: "New Test 2",
            itemUrl: "Agriculture",
            thumbnailUrl: "thumbnailUrl 2",
            authorId: 2,
            authorUsername: "@author2",
            authorAvatarUrl: "authorAvatarUrl 2",
            exerpt: "exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 ",
            content: "content2",
            version: "1.0.2",
            sourceCodeUrl: "sourceCodeUrl 2",
            categories: categoryList,
            runners: runnerList,
            projects: projectList,
            runCount: runnerList.length,
            projectCount: projectList.length,
            isDownloaded: false
        }
        ]
=======
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
>>>>>>> 99778b67fcb390e888187a6f9f6c21c9a99ff63e

@Component({
    selector: 'appc-library',
    styleUrls: ['./library.component.scss'],
    templateUrl: './library.component.html'
})
export class LibraryComponent {
    dataCategory: any;
    dataRunner: any;
    data: any;
    temp: string;
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
        this.temp = "";
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

    changeTemp(t: string) {
        this.temp = t;
    }

}