import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(values: any){
  	console.log(values);
  }

  consoleLog(errors: any){
  	console.log(errors);
  }

}
