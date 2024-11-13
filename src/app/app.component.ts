import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-e-commerce-task';

  constructor(private spinner: NgxSpinnerService) {
    spinner.show();

    setTimeout(() => {
      spinner.hide();
    }, 3000);
  }
}
