import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'translateTask';
  constructor(private translateservice: TranslateService) {}
  translate(event: any) {
    this.translateservice.use(event.target.value);
  }
}
