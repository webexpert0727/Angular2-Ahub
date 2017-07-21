import { MediaTypeModel } from './models/media-type.model';
import { InputModel } from './models/input.model';
import { ParameterModel } from './models/parameter.model';
import { RunModel } from './models/run.model';
import { AssetModel } from './models/asset.model';
import { LibraryItemModel } from './models/library-item.model';
import { RunnerModel } from './models/runner.model';
import { ProjectModel } from './models/project.model';
import { CategoryModel } from './models/category.model';
const style = require('ansi-styles');
import { Injectable } from '@angular/core';
const displayDate = new Date().toLocaleDateString();

const categoryList: CategoryModel[] = [{
    id: 1,
    name: 'Agriculture'
},
{
    id: 2,
    name: 'Finance'
}];
const parameterList: ParameterModel[] = [{
    id: 1,
    sortOrder: 1,
    name: 'Test1',
    value: '192.168.0.1',
    description: 'RestTest'
},
{
    id: 2,
    sortOrder: 2,
    name: 'Test8',
    value: '192.012142354354',
    description: 'Test2435'
},
{
    id: 3,
    sortOrder: 3,
    name: 'Test3235',
    value: '19.34545',
    description: '56768'
}
];

const parameterList1: ParameterModel[] = [{
    id: 1,
    sortOrder: 1,
    name: 'Test1',
    value: '192.168',
    description: 'descriptiontest'
},
{
    id: 2,
    sortOrder: 2,
    name: 'Test2',
    value: '192.01',
    description: 'descriptiontest1'
},
{
    id: 3,
    sortOrder: 3,
    name: 'Test3',
    value: '19.01',
    description: 'descriptiontest2'
}
];

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
        filename: 'Test image 4',
        runId: 3,
        downloadUrl: 'test2.com',
        mediaType: 'Test Media 56',
        dateCreated: displayDate,
        source: '567',
        type: 'Input',
    },
    {
        id: 5,
        filename: 'Test image 5',
        runId: 4,
        downloadUrl: 'test2.com 4',
        mediaType: 'Test Media 24',
        dateCreated: displayDate,
        source: 'testSource24',
        type: 'Input',
    }];

const runsList: RunModel[] = [{
    id: 1,
    algoName: 'TestAlgo',
    projectId: 1,
    dateAdded: new Date('7/10/17'),
    dateStarted: '7/10/17 at 2:15 PM',
    dateCompleted: '7/10/17 at 2:17 PM',
    assets: assetsList.filter(x => x.runId === 1),
    runtimeMs: 2,
    status: 'Status1',
    completionPercent: 60,
    parameters: parameterList,
    stdErr: `
   <div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>`,
    stdOut: `<div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>
`,
    hasErrors: true
},
{
    id: 2,
    algoName: 'TestAlgo1',
    projectId: 1,
    dateAdded: new Date('7/10/15'),
    dateStarted: '7/10/15 at 2:13 PM',
    dateCompleted: '7/10/15 at 2:18 PM',
    assets: assetsList.filter(x => x.runId === 2),
    runtimeMs: 5,
    status: 'Status2',
    completionPercent: 80,
    parameters: parameterList1,
    stdErr: (style.color.ansi16m.hex('#ABCDEF') + `
   <div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>` + style.color.close),
    stdOut: `<div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>
`,
    hasErrors: true
},
{
    id: 3,
    algoName: 'TestAlgo2',
    projectId: 2,
    dateAdded: new Date('7/10/16'),
    dateStarted: '7/10/16 at 2:13 PM',
    dateCompleted: '7/10/16 at 2:18 PM',
    assets: assetsList.filter(x => x.runId === 3),
    runtimeMs: 5,
    status: 'Status2',
    completionPercent: 55,
    parameters: parameterList1,
    stdErr: (style.color.ansi16m.hex('#ABCDEF') + `
   <div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>` + style.color.close),
    stdOut: `<div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>
`,
    hasErrors: true
},
{
    id: 4,
    algoName: 'TestAlgo3',
    projectId: 2,
    dateAdded: new Date('7/10/12'),
    dateStarted: '7/10/12 at 1:10 PM',
    dateCompleted: '7/10/12 at 1:18 PM',
    assets: assetsList.filter(x => x.runId === 4),
    runtimeMs: 8,
    status: 'Status2',
    completionPercent: 93,
    parameters: parameterList1,
    stdErr: (style.color.ansi16m.hex('#ABCDEF') + `
   <div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>` + style.color.close),
    stdOut: `<div>
<div>[21:47:36] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date</div>
<div>[ 21: 47: 38] I/ update - geckodriver: unzipping geckodriver-v0.18.0.zip</div>
<div>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):</div>
<div>npm WARN not sup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for f sevent s@1.1.2: wanted {"os":"darwin","arch":"any</div>
<div>"} (current: {"os":"win32","arch":"x64"})</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @angular/core@^2.0.0-rc.0 but none was installed.</div>
<div>npm WARN @ngrx/devtools@1.4.0 requires a peer of @ngrx/store@^1.5.0 but none was installed.</div>
<div>npm WARN @ngtools/webpack@1.5.0-beta.1 requires a peer of webpack@^2.2.0 but none was inst alled.</div>
<div>npm WARN aspnet-webpack@1.0.29 requires a peer of webpack@^1.13.2 | | ^2.1.0-beta but none was installed.</div>
</div>
`,
    hasErrors: true
},
];

const runnerList: RunnerModel[] = [{

    id: 1,
    name: 'Docker',
    thumbnailUrl: 'qwerty1',
    parameters: parameterList,
},
{
    id: 2,
    name: 'Java',
    thumbnailUrl: 'qwerty2',
    parameters: parameterList,
},
{
    id: 3,
    name: 'Python',
    thumbnailUrl: 'qwerty3',
    parameters: parameterList,
}];


const projectList: ProjectModel[] =
    [{
        id: 1,
        name: 'Rest 1',
        exerpt: 'test 1',
        dateAdded: displayDate,
        categories: categoryList,
        runs: runsList,
        assets: assetsList.filter(x => x.runId === 1),
        runCount: 2,
        assetCount: 4
    },
    {
        id: 2,
        name: 'Rest 2',
        exerpt: 'test 2',
        dateAdded: displayDate,
        categories: categoryList,
        runs: runsList,
        assets: assetsList,
        runCount: 2,
        assetCount: 2
    },
    ];

const mediaTypelist: MediaTypeModel[] = [{

}]

const inputList: InputModel[] = [{
    id: 1,
    name: 'Test',
    description: 'stringDescription',
    isRequired: false,
    acceptMultiAsset: false,
    mediaTypes: mediaTypelist
},
{
    id: 2,
    name: 'Test2',
    description: 'stringDescription2',
    isRequired: false,
    acceptMultiAsset: false,
    mediaTypes: mediaTypelist
},
{
    id: 3,
    name: 'Test3',
    description: 'stringDescription3',
    isRequired: true,
    acceptMultiAsset: true,
    mediaTypes: mediaTypelist
}

]
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
            isDownloaded: true,
            inputs: inputList,
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
            version: '1.0.2.',
            sourceCodeUrl: 'sourceCodeUrl 2',
            categories: categoryList,
            runners: runnerList,
            projects: projectList,
            runCount: runnerList.length,
            projectCount: projectList.length,
            isDownloaded: false,
            inputs: inputList,
        }
    ]
@Injectable()
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
