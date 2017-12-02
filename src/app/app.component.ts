import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: String = 'On';
  click: Boolean = true;
  arr: Array<object> = [];

  ngOnInit() {
    this.populate();
  }

  populate() {
    
    for (let i = 0; i < 10; i++) {
      var btn: object = { "id": i, "status": "On", "color": "Green" };
      this.arr.push(btn);
    }
    return this;
  }

  onButtonClick(obj, idx) {
    if (obj.status == "On" && idx == this.arr[idx].id) {
      this.arr[idx].status = "Off";
      this.arr[idx].color = "Red";
    }
    else if (obj.status == "Off" && idx == this.arr[idx].id){
      this.arr[idx].status = "On";
      this.arr[idx].color = "Green";
    }
    console.log(this.arr[idx])
    console.log(this.arr)

  }

}
