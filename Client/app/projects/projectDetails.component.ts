import { ActivatedRoute, Params } from '@angular/router';
import { MockAPi } from './../mock.api';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'appc-projects-details',
    styleUrls: ['./projectsDetails.component.scss'],
    templateUrl: './projectDetails.component.html'
})

export class ProjectsDetailsComponent implements OnInit {
    id: number;
    data: any;

    constructor(private route: ActivatedRoute, private api: MockAPi) {
        this.route.params.forEach((params: Params) => {
            this.id = this.route.snapshot.params['id'];
        });
    }
    ngOnInit() {
        this.getData();

    }

    getData() {
        this.api.getDataById(+this.id).then((data) => {
            this.data = data;
            debugger;
        });
    }

}
