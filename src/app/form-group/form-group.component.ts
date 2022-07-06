import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
	selector: 'app-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	//form members
	
	signinForm = new FormGroup({
		userName: new FormControl(),
		password: new FormControl()
	});

	submitFun(){
		alert(JSON.stringify(
			'Name :'+this.signinForm.value.userName+
			'Password :'+this.signinForm.value.password
		));
	}
}
