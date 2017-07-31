import { IMultiSelectSettings, IMultiSelectOption, IMultiSelectTexts} from './../dropdownComponent/types';
import { MockAPi } from './../mock.api';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

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
    template: '<ss-multiselect-dropdown [options]="myOptions" [texts]="myTexts" [settings]="mySettings" [(ngModel)]="optionsModel"></ss-multiselect-dropdown>'
})

export class DropDownComponent implements OnInit {
    optionsModel: number[];
    mySettings: IMultiSelectSettings = {
        selectionLimit: 1,
        enableSearch: true,
        checkedStyle: 'fontawesome',
        dynamicTitleMaxItems: 1,
        displayAllSelectedText: false
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

    constructor(private _sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.myOptions = [
            { id: 1, name: 'Algo name', html: this._sanitizer.bypassSecurityTrustHtml('<div  style="color: black"><span style="display:inline-block;"><h5>Algo name</h5></span><span style="display:inline-block; float:right;">v 1.0.1</span></div><div style="color: black">Algo exerpt - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</div>') },
            { id: 2, name: 'Algo name 2', html: this._sanitizer.bypassSecurityTrustHtml('<div style="color: black"><span style="display:inline-block;"><h5>Algo name 2</h5></span><span style="display:inline-block; float:right;"> v 1.0.1</span></div><div style="color: black">Algo exerpt - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</div>') },
        ];
    }
    onChange() {
        console.log(this.optionsModel);
    }
}

@Component({
    selector: 'run-dropdown',
    styles: ['./newRuns.component.scss'],
    template: '<ss-multiselect-dropdown [options]="myOptions" [texts]="myTexts" [settings]="mySettings" [(ngModel)]="optionsModel"></ss-multiselect-dropdown>'
})

export class RunDownComponent implements OnInit {
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
        defaultTitle: 'Choose Runner...',
        allSelected: 'All selected',
    };

    // Labels / Parents 
    myOptions: IMultiSelectOption[] = [];

    constructor(private _sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.myOptions = [
            { id: 1, name: 'Runner Name', html: this._sanitizer.bypassSecurityTrustHtml('<div style="color: black"><div style="display: inline-block; margin-right: 15px;"">img</div><div style="display: inline-block; width: 250px;"><div>Runner Name</div><div>Runner discription</div> </div></div>') },
            { id: 2, name: 'Runner Name 2', html: this._sanitizer.bypassSecurityTrustHtml('<div style="color: black"><div style="display: inline-block; margin-right: 15px;">img</div><div style="display: inline-block; width: 250px;"><div>Runner Name 2</div><div>Runner discription</div> </div></div>') },
        ];
    }
    onChange() {
        console.log(this.optionsModel);
    }
}