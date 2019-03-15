import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngTranslate';

  marType
  ngOnInit(): void {
    console.log('marType', this.marType)


  }
  updateValue(test) {
    console.log('space', test)

  }
  updateLast(test) {
    console.log('Normal ', test)

  }
}
