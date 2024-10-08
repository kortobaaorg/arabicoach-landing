import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  _snackBar = inject(MatSnackBar);
  isLoading: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  submitForm() {
    if (this.contactForm.valid) {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 1500,
        data: {
          message: 'Your request has been sent',
          className: 'success',
        },
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    } else {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 1500,
        data: {
          message: 'Error has been occurred',
          className: 'warn',
        },
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
