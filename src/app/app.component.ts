import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'responsiveForm';

	constructor(private route:Router){}
	newForm = new FormControl()

	Default(){
		this.newForm.setValue('Default Names')
	}
}
