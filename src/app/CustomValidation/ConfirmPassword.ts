import { AbstractControl} from "@angular/forms";

export function ConfirmPasswordValidator(control:AbstractControl)
{
  const password=control.get('password');
  const confirmPassword=control.get('confirmpassword');

 if(password?.pristine ||confirmPassword?.pristine)
 {
    return null
 }
 else
 {
    return password && confirmPassword && password.value!=confirmPassword.value 
    ? {'mismatch':true}
    :null;
 }
}