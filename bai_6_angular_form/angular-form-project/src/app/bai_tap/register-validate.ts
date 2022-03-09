import {AbstractControl} from '@angular/forms';

export class RegisterValidate {
 public checkAge(a: AbstractControl):any{
   const age = Number(a.value);
  return age > 18 ? null : {not18 : true};
 }

  public checkPass(a: AbstractControl): any{
    let check = a.value;
    return check.passWord == check.confirmPassWord ? null : {checkPass: true};
  }
}
