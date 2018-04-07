import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  autor = 'Alejandro Matallana';
  count = 0;
  imageSource = './../favicon.ico';
  enabled = false;
}
