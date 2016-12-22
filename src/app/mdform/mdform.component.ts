import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../validators/custom-validators';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MdformComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  	this.form = this._fb.group({
  		'nombre': ['edgar', Validators.compose([
  			Validators.required,
  			Validators.minLength(3),
  			CustomValidators.filtraNombre('memo')
  		])],
  		'apellido': [null, [Validators.required]],
  		'direccion': [null, [Validators.required, CustomValidators.formatoNumero]]
  	});

  	// this.form = new FormGroup({
  	// 	'nombre': new FormControl('Edgar',[Validators.required,Validators.minLength(4)]),
  	// 	'apellido': new FormControl(null,[Validators.required]),
  	// 	'direccion': new FormControl(null,[Validators.required])
  	// });
  }

  onSubmit(){
  	console.log(this.form.value);
  }

}
