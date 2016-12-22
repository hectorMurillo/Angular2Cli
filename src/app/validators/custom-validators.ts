import { FormControl, AbstractControl } from '@angular/forms';

export class CustomValidators {
	static formatoNumero(control: FormControl): any{
		let exp: any = /^[0-9]+$/
		if(control.value !== undefined && !exp.test(control.value)) {
			return {'formatoNumero': true, 'currentValue': control.value};
		}
		return null;
	}

	static filtraNombre(nombre: string): any{
		return function(control){
			if(control.value === nombre) {
				return {'filtraNombre': true};
			}
			return null;
		}
	}
}
