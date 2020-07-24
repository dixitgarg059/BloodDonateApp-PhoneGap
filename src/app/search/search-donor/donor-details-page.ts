import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { SearchDonor } from '../../models/search-donor-model';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'modal-page',
    templateUrl: 'donor-details-page.html',
    styleUrls: ['./donor-details-page.scss']
})

export class DonorDetailsPage {

    @Input() donorDetails: SearchDonor;
    @Input() state: string;
    @Input() city: string;
    donateDetails: string = '';
    constructor(private modalCtrl: ModalController) {
        
    }

    ionViewDidEnter() {
        this.donateDetails = 'entered';
        if (this.donorDetails.BloodDonationOption == "NeverDonated") {
            this.donateDetails = "Never Donated";
        }
        else if (this.donorDetails.BloodDonationOption == "LastDonatedOn") {
           this.donateDetails = new Date(this.donorDetails.LastDonatedDate).toISOString().substring(0, 10);
        }
    }

    closeDetailsPage() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
}