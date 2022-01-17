import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'admin-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.less']
})
export class UserSettingComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.form = this.fb.group({
      link: [null, [Validators.required]],
    })
  }


  save(){

  }


}
