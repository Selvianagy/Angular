import { AbstractControl} from "@angular/forms";
export function Namevalidation(forbiddenName:RegExp){
    return (control:AbstractControl)=>{
        const name= forbiddenName.test(control.value);
    return name ? {'forbiddenName':{value:control.value}} :null;
    }
}