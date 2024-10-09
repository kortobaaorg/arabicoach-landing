import { Component, inject, OnDestroy } from '@angular/core';
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
import { ContactService } from '../../../shared/services/contact.service';
import { Subscription } from 'rxjs';

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
export class ContactUsComponent implements OnDestroy {
  _snackBar = inject(MatSnackBar);
  isLoading: boolean = false;
  contactSub$!: Subscription;
  _ContactService = inject(ContactService);

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  submitForm() {
    this.isLoading = true;
    const formBody = {
      email: this.contactForm.value.email,
      name: this.contactForm.value.name,
      message: this.contactForm.value.message,
    };

    this.contactSub$ = this._ContactService.sendContactUs(formBody).subscribe({
      next: () => {
        this.openSnackBar('Your request has been sent', 'success');
        this.contactForm.reset();
        this.isLoading = false;
      },
      error: () => {
        this.openSnackBar('Error has been occurred', 'warn');
        this.isLoading = false;
      },
    });
  }

  openSnackBar(message: string, className: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1500,
      data: {
        message: message,
        className: className,
      },
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  ngOnDestroy(): void {
    this.contactSub$?.unsubscribe();
  }
}
