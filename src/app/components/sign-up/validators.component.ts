import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value === name ? { forbiddenName: control.value } : null;
    }
}

// export const passValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//     return control.value === 'Bob' ? { forbiddenName: control.value } : null;
// }

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl)
: ValidationErrors | null => {
    const pass1 = control.get('password1');
    const pass2 = control.get('password2');
    return pass1?.value !== pass2?.value ? { identityRevealed: true } : null;
}