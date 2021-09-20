import {Component} from '@angular/core';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  title = 'User panel';
  firstName = 'John';
  secondName = 'Silverstone';
  age = 45;
}
