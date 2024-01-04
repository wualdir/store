import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from '../../../shared/header/header.component'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
