import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {HoliService} from '../../services/holi/holi.service';
import {AlertService} from '@candiman/website';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTicketAlt} from '@fortawesome/free-solid-svg-icons/faTicketAlt';
import {faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import {faCar} from '@fortawesome/free-solid-svg-icons/faCar';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons/faCheckCircle';
import {faFillDrip} from '@fortawesome/free-solid-svg-icons/faFillDrip';

@Component({
  selector: 'gm-holi',
  templateUrl: './holi.component.html',
  styleUrls: ['./holi.component.scss']
})
export class HoliComponent implements OnInit {

  public loading: boolean;
  results = [];
  entered: number;

  email: string;
  name: string;
  phone: string;
  postcode: string;
  doorcode: string;
  barcode: string;
  mobile: string;

  constructor(
    private holiService: HoliService,
    private alertService: AlertService,
    private httpClient: HttpClient
  ) {
    library.add(faTicketAlt, faPaintBrush, faCar, faSpinner, faCheckCircle, faFillDrip);
  }

  ngOnInit() {
  }

  makeEntry(result, i) {
    this.results[i].loading = true;
    console.log(result);
    this.httpClient
      .post(environment.restUrl + '/holi/update', result)
      .subscribe((response: any) => {
          this.alertService.alert({
            title: 'Check in success!',
            subTitle: 'Guest can enter to the event now.',
            text: response.message,
            type: 'success'
          });
          this.results[i] = this.holiService.calculateCheckIn(this.results[i]);
          this.results[i].message = response.message;
          this.results[i].loading = false;
        }, (error) => {
          this.alertService.alert({
            title: 'Unable to check in!',
            subTitle: 'Please try again or contact support team.',
            text: error,
            type: 'danger'
          });
          this.results[i].loading = false;
        }
      );
  }

  emailSearch() {
    this.loading = true;
    this.results = [];
    return this.httpClient
      .post(environment.restUrl + '/holi/email', this.email)
      .subscribe(
        (response: any) => {
          this.loading = false;
          if (response.length === 0) this.alertService.alert({
            title: 'Did not find any event entry!',
            subTitle: 'Search another entry record.',
            text: '',
            type: 'danger'
          });
          this.results = this.holiService.calculateAllCheckIns(response);
        },
        (error) => {
          this.loading = false;
          this.alertService.alert({
            title: 'Did not find any event entry!',
            subTitle: 'Please try again or contact support team.',
            text: error,
            type: 'danger'
          });
        });
  }

  nameSearch() {
    this.makeSearch('/holi/name/', this.name);
  }

  phoneSearch() {
    this.makeSearch('/holi/phone/', this.phone);
  }

  postcodeSearch() {
    this.makeSearch('/holi/postCode/', this.postcode);
  }

  doorcodeSearch() {
    this.makeSearch('/holi/doorCode/42-', this.doorcode);
  }

  barcodeSearch() {
    this.makeSearch('/holi/barCode/', this.barcode);
  }

  mobileSearch() {
    this.makeSearch('/holi/mobile/', this.mobile);
  }

  makeSearch(url: string, value: string) {
    this.loading = true;
    this.results = [];
    return this.httpClient
      .get(environment.restUrl + url + value)
      .subscribe((response: any) => {
        console.log(response);
          this.loading = false;
          if (response.length === 0) {
            this.alertService.alert({
              title: 'Did not find any event entry!',
              subTitle: 'Search another entry record.',
              text: '',
              type: 'danger'
            });
          }
          this.results = this.holiService.calculateAllCheckIns(response);
        },
        (error) => {
          this.loading = false;
          this.alertService.alert({
            title: 'Did not find any event entry!',
            subTitle: 'Please try again or contact support team.',
            text: error,
            type: 'danger'
          });
        });
  }
}
