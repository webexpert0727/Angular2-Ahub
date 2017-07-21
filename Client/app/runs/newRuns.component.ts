import { MockAPi } from './../mock.api';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common'

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-new-runs',
    styleUrls: ['./newRuns.component.scss'],
    templateUrl: './newRuns.component.html'
})

export class NewRunsComponent implements OnInit {
    id: number;
    data: any = [] = [];
    dataAssets: any[] = [];
    dataRunsId: any;
    dataLibrary: any[];
    dataRunners: any[];
    constructor(private route: ActivatedRoute, private api: MockAPi, public router: Router, location: PlatformLocation) {
        this.route.params.forEach((params: Params) => {
            this.id = this.route.snapshot.params['id'];
        });
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.api.getDataProjectById(+this.id).then((data) => {
            this.data = data;
            this.dataRunsId = data.runs[data.runs.length - 1].id + 1;

        });
        this.api.getDataLibrary().then((dataLibrary) => {
            this.dataLibrary = dataLibrary[0];
            this.dataLibrary.runners.forEach(element => {
                this.dataRunners = element;
            });
        });
    }
}