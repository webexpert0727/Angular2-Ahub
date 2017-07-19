import { Router, ActivatedRoute, Params } from '@angular/router';
import { MockAPi } from './../mock.api';
import { Component, OnInit } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-runs',
    styleUrls: ['./runs.component.scss'],
    templateUrl: './runs.component.html'
})


export class RunDetailComponent implements OnInit {
    id: any;
    idChild: any;
    data: any[];
    dataRuns: any;
    dataAssets: any[] = [];
    constructor(private route: ActivatedRoute, private api: MockAPi, public router: Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.id = this.route.snapshot.url[1].path;
            this.idChild = this.route.snapshot.params['id'];
        });
        this.getData();
    }

    getData() {
        this.api.getDataProjectById(+this.id).then((data) => {
            this.data = data;
            debugger;
            data.runs.forEach(element => {
                if (+this.idChild === element.id) {
                    this.dataRuns = element;
                }
                element.assets.forEach(element => {
                    if (+this.idChild === element.runId) {
                        this.dataAssets.push(element);
                    }
                });
            });
        });
    }
}
