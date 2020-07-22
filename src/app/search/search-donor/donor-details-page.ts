import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { SearchDonor } from '../../models/search-donor-model';

@Component({
    selector: 'modal-page',
    templateUrl: 'donor-details-page.html',
    styleUrls: ['./donor-details-page.scss']
})

export class DonorDetailsPage {

    @Input() donorDetails: SearchDonor;

    constructor(private modalCtrl: ModalController) {

    }

    closeDetailsPage() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
}