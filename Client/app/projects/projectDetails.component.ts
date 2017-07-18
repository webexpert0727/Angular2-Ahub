import { ActivatedRoute, Params, Router } from '@angular/router';
import { MockAPi } from './../mock.api';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'appc-projects-details',
    styleUrls: ['./projectsDetails.component.scss'],
    templateUrl: './projectDetails.component.html'
})

export class ProjectsDetailsComponent implements OnInit {
    id: number;
    data: any = [] = [];
    dataAssets: any[] = [];

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

}
