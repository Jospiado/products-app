import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  @Input()
  depNome!: String;
  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }
  clear() {

  }
}
