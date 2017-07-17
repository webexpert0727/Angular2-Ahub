import { RunModel } from './models/run.model';
import { AssetModel } from './models/asset.model';
import { LibraryItemModel } from './models/library-item.model';
import { RunnerModel } from './models/runner.model';
import { ProjectModel } from './models/project.model';
import { CategoryModel } from './models/category.model';

const displayDate = new Date().toLocaleDateString();

const categoryList: CategoryModel[] = [{
    id: 1,
    name: 'Agriculture'
},
{
    id: 2,
    name: 'Finance'
}];

const assetsList: AssetModel[] =
    [{
        id: 1,
        filename: 'project 1',
        runId: 1,
        downloadUrl: 'test.com',
        mediaType: 'Test Media 1',
        dateCreated: displayDate,
        source: 'testSource',
        type: 'Input',
    },
    {
        id: 2,
        filename: 'image 2',
        runId: 1,
        downloadUrl: 'test.com',
        mediaType: 'Test Media 6',
        dateCreated: displayDate,
        source: 'testSourcetest',
        type: 'Input',
    },
    {
        id: 3,
        filename: 'image test',
        runId: 2,
        downloadUrl: 'test.com',
        mediaType: 'Test Media 1',
        dateCreated: displayDate,
        source: 'testSource',
        type: 'Input',
    },
    {
        id: 4,
        filename: 'image 4',
        runId: 2,
        downloadUrl: 'test1.com',
        mediaType: 'Test Media 2',
        dateCreated: displayDate,
        source: 'testSource1',
        type: 'Output',
    },
    {
        id: 5,
        filename: 'project 3',
        runId: 3,
        downloadUrl: 'test2.com',
        mediaType: 'Test Media 2',
        dateCreated: displayDate,
        source: 'testSource2',
        type: 'Input',
    }];

const runsList: RunModel[] = [{
    id: 1,
    algoName: 'TestAlgo',
    projectId: 1,
    dateAdded: '7/10/17',
    dateStarted: '2:15 PM',
    dateCompleted: '2:17 PM',
    assets: assetsList.filter(x => x.runId === 1),
    runtimeMs: 2,
    status: 'Status1'
},
{
    id: 2,
    algoName: 'TestAlgo1',
    projectId: 1,
    dateAdded: '7/10/15',
    dateStarted: '2:13 PM',
    dateCompleted: '2:18 PM',
    assets: assetsList.filter(x => x.runId === 1),
    runtimeMs: 5,
    status: 'Status2'
},
{
    id: 3,
    algoName: 'TestAlgo2',
    projectId: 2,
    dateAdded: '7/12/17',
    dateStarted: '2:00 PM',
    dateCompleted: '2:02 PM',
    assets: assetsList.filter(x => x.runId === 2),
    runtimeMs: 2,
    status: 'Status3'
},
{
    id: 4,
    algoName: 'TestAlgo3',
    projectId: 3,
    dateAdded: '7/10/14',
    dateStarted: '2:10 PM',
    dateCompleted: '2:12 PM',
    assets: assetsList.filter(x => x.runId === 3),
    runtimeMs: 2,
    status: 'Status4'
},
];
const runnerList: RunnerModel[] = [{

    id: 1,
    name: 'Docker',
    thumbnailUrl: 'qwerty1'
},
{
    id: 2,
    name: 'Java',
    thumbnailUrl: 'qwerty2'
},
{
    id: 3,
    name: 'Python',
    thumbnailUrl: 'qwerty3'
}];

const projectList: ProjectModel[] =
    [{
        id: 1,
        name: 'project 1',
        exerpt: 'test1',
        dateAdded: displayDate,
        categories: categoryList,
        runs: runsList.filter(x => x.projectId === 1),
        assets: assetsList.filter(x => x.runId === 1),
        runCount: runsList.filter(x => x.projectId === 1).length,
        assetCount:  assetsList.filter(x => x.runId === 1).length
    },
    {
        id: 2,
        name: 'project 2',
        exerpt: 'test2',
        categories: categoryList,
        runs: runsList.filter(x => x.projectId === 2),
        assets: assetsList.filter(x => x.runId === 2),
        runCount: runsList.filter(x => x.projectId === 2).length,
        assetCount: assetsList.filter(x => x.runId === 2).length
    },
    {
        id: 3,
        name: 'project 3',
        exerpt: 'test3',
        categories: categoryList,
        runs: runsList.filter(x => x.projectId === 3),
        assets: assetsList.filter(x => x.runId === 3),
        runCount: runsList.filter(x => x.projectId === 3).length,
        assetCount:  assetsList.filter(x => x.runId === 3).length
    }];

const libraryList: LibraryItemModel[] =
    [
        {
            id: 1,
            name: 'New Test 1',
            itemUrl: 'Finance',
            thumbnailUrl: 'thumbnailUrl 1',
            authorId: 1,
            authorUsername: '@author1',
            authorAvatarUrl: 'authorAvatarUrl l',
            exerpt: 'exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 exerpt1 ',
            content: 'content1',
            version: '1.0.1',
            sourceCodeUrl: 'sourceCodeUrl 1',
            categories: categoryList,
            runners: runnerList,
            projects: projectList,
            runCount: runnerList.length,
            projectCount: projectList.length,
            isDownloaded: true
        },
        {
            id: 2,
            name: 'Vallie',
            itemUrl: 'Agriculture',
            thumbnailUrl: 'thumbnailUrl 2',
            authorId: 2,
            authorUsername: 'authorUsername 2',
            authorAvatarUrl: 'authorAvatarUrl 2',
            exerpt: 'exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 exerpt2 ',
            content: 'content2',
            version: 'version2',
            sourceCodeUrl: 'sourceCodeUrl 2',
            categories: categoryList,
            runners: runnerList,
            projects: projectList,
            runCount: runnerList.length,
            projectCount: projectList.length,
            isDownloaded: false
        }
    ]
export class MockAPi {
    getDataLibrary(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(libraryList);
        });
    }
    getDataProject(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(projectList);
        });
    }

    getDataProjectById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            const result = projectList.find(x => x.id === id)
            resolve(result);
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
}
