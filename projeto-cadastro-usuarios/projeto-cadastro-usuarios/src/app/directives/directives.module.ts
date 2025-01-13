import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { PasswordStrenghtValidatorDirective } from './password-strenght-validator.directive';

@NgModule({
  declarations: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrenghtValidatorDirective
  ],
  exports: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrenghtValidatorDirective,
  ],
})
export class DirectivesModule { }