import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  display: string = '';
  buttons: string[] = [
    'C', '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  onButtonClick(button: string) {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.clearDisplay();
    } else {
      this.display += button;
    }
  }
  clearDisplay() {
    this.display = '';
  }


  calculate() {
    try {
      this.display = eval(this.display).toString();
    } catch {
      this.display = 'Error';
    }
  }

}
