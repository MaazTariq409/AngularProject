import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreAngular';
  showParagraph = false
  buttonClicked = []
  serverElements = ['Testserver'];

  hideParagraph()
  {
    if(this.showParagraph === true)
    {
      this.showParagraph = false
    }
    else{
      this.showParagraph = true
    }

    this.buttonClicked.push(this.buttonClicked.length + 1)
  }

  onServerAdded(eventData)
  {
    this.serverElements.push(
     eventData.ServerNameInApp
    );
    alert("Its working" + eventData.ServerNameInApp);
    console.log(this.serverElements);
  }
}
