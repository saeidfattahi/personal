import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal3';

  hideNavBar(e: any){
    console.log('test')
    e.hide();
  }
}
