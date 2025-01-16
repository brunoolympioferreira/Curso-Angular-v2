import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { PasswordStrenghtValidatorDirective } from './password-strenght-validator.directive';
import { PasswordConfirmationValidatorDirective } from './password-confirmation-validator.directive';

@NgModule({
  declarations: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrenghtValidatorDirective,
    PasswordConfirmationValidatorDirective
  ],
  exports: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrenghtValidatorDirective,
    PasswordConfirmationValidatorDirective,
  ],
})
export class DirectivesModule { }