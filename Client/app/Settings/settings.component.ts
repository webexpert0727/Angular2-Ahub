import { Component, OnInit } from '@angular/core';
import { MockAPi } from './../mock.api'; 

@Component({
    selector: 'appc-settings',
    styleUrls: ['./settings.component.scss'],
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

    dataUsers: any;
    dataSettings: any;
    dataRunners: any;
    dataInputRout: any;
    dataOutputRout: any;

    constructor(public api: MockAPi) { }

    getUsers() {
        this.api.getUsers().then((dataUsers) => {
            this.dataUsers = dataUsers;
        });
    }

    getSettings() {
        this.api.getSettings().then((dataSettings) => {
            this.dataSettings = dataSettings;
        });
    }    

    getRunners() {
        this.api.getRunners().then((dataRunners) => {
            this.dataRunners = dataRunners;
        });
    }  

    getInputRout() {
        this.api.getInputRout().then((dataInputRout) => {
            this.dataInputRout = dataInputRout;
        });
    }

    getOutputRout() {
        this.api.getOutputRout().then((dataOutputRout) => {
            this.dataOutputRout = dataOutputRout;
        });
    }

   

    ngOnInit() {
        this.getOutputRout()
        this.getInputRout()
        this.getRunners()
        this.getSettings()
        this.getUsers();
    }

}