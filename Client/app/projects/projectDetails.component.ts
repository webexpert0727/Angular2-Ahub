import { ActivatedRoute, Params, Router } from '@angular/router';
import { MockAPi } from './../mock.api';
import { Component, OnInit } from '@angular/core';
const displayDate = new Date().toLocaleDateString();

@Component({
    selector: 'appc-projects-details',
    styleUrls: ['./projectsDetails.component.scss'],
    templateUrl: './projectDetails.component.html'
})


export class ProjectsDetailsComponent implements OnInit {
    id: number;
    data: any = [] = [];
    dataAssets: any[] = [];
    dataRuns: any[];
    value = 1;

    constructor(private route: ActivatedRoute, private api: MockAPi, public router: Router) {
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
            this.dataRuns = data.runs;
            data.runs.forEach(element => {
                element.assets.forEach(element => {
                    this.dataAssets.push(element);
                });
            });
        });
    }
    goToRunsDetails(id: string, projectId: string) {
        this.router.navigate([`projects/${projectId}/runs`, id]);
    }
    public sortByDueDate(value: any): void {
        this.dataRuns.sort((a, b) => {
            if (value === '1') {
                return b.dateAdded.getTime() - a.dateAdded.getTime();
            }
            if (value === '2') {
                return a.dateAdded.getTime() - b.dateAdded.getTime();
            }
        }
}
