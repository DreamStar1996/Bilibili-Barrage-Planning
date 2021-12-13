import { Component, OnInit } from "@angular/core";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-form-list",
  templateUrl: "./form-list.component.html",
  styleUrls: ["./form-list.component.scss"],
})
export class FormListComponent implements OnInit {
  FoodData = [];
  HeadData = [];

  FoodStatus: string;
  HeadStatus: string;

  FoodValue: string;
  HeadValue: string;

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  constructor() {}

  ngOnInit() {}

  foodselect(value) {
    if (value == "SelectAll") {
      this.FoodData = this.foodmat();
      return;
    }
    if (value == "CancelAll") {
      this.FoodData = [];
      return;
    }
    debugger;
  }

  headselect(value) {
    if (value == "SelectAll") {
      this.HeadData = [];
      return;
    }
    if (value == "CancelAll") {
      this.HeadData = [];
      return;
    }
    debugger;
  }

  headchange(value) {
    console.log("-----test select value-----", value);
    for (let i = 0; i <= value.length; i++) {
      this.HeadData = value[i++];
    }
    console.log("-----this.HeadData-----", this.HeadData);
  }

  foodmat() {
    let all = [];
    this.foods.forEach((x) => {
      all.push(x.value);
    });
    debugger;
    return all;
  }
}
