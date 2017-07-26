import { IMultiSelectSettings} from './../dropdownComponent/types';
import { MockAPi } from './../mock.api';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { IMultiSelectOption, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
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
    dataValue: any[];
    selectedValue: any;

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

@Component({
    selector: 'my-dropdown',
    styles: ['./newRuns.component.scss'],
    template: '<ss-multiselect-dropdown [options]="myOptions" [texts]="myTexts" [settings]="mySettings" [(ngModel)]="optionsModel"></ss-multiselect-dropdown>'})

export class DropDownComponent implements OnInit {
    optionsModel: number[];
    mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        dynamicTitleMaxItems: 1,
        displayAllSelectedText: true
    };

    // Text configuration 
    myTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Search...',
        defaultTitle: 'Choose Algo...',
        allSelected: 'All selected',
    };

    // Labels / Parents 
    myOptions: IMultiSelectOption[] = [];

    ngOnInit() {
        this.myOptions = [
            { id: 1, name: 'Algo name', html: '<div><span class="pull-left"><h3>Algo name</h3></span><span class="pull-right"><h3> v 1.0.1</h3></span></div><div class="pull-left">Algo exerpt - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</div>' },
            { id: 2, name: 'Algo name 2', html: '<div><span class="pull-left"><h3>Algo name 2</h3></span><span class="pull-right"><h3> v 1.0.2</h3></span></div><div class="pull-left">Algo exerpt - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</div>'}
        ];
    }
    onChange() {
        console.log(this.optionsModel);
    }
}