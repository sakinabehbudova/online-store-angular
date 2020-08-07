import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ViewChild, ElementRef, } from '@angular/core';
@ViewChild('ccNumber')




@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
 

  constructor(private fb: FormBuilder, private ccNumberField: ElementRef) { }
  header = "My Basket";
  paymentForm: FormGroup;
  createPaymentForm() {
    this.paymentForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      phoneNumber: ["", Validators.required],
      adress: ["", Validators.required],
      nameOnCard: ["", Validators.required],
      cardNumber: ["", [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^[ 0-9]*$')]],
      expiryDate:['', [Validators.required]],
      cvv: ["", Validators.required]

    })
  }
  

  ngOnInit(): void {
    this.createPaymentForm();
  }


  creditCardNumberSpacing() {
    const input = this.ccNumberField.nativeElement;
    const { selectionStart } = input;
    const { cardNumber } = this.paymentForm.controls;

    let trimmedCardNum = cardNumber.value.replace(/\s+/g, '');

    if (trimmedCardNum.length > 16) {
      trimmedCardNum = trimmedCardNum.substr(0, 16);
    }

    /* Handle American Express 4-6-5 spacing */
    const partitions = trimmedCardNum.startsWith('34') || trimmedCardNum.startsWith('37')
      ? [4, 6, 5]
      : [4, 4, 4, 4];

    const numbers = [];
    let position = 0;
    partitions.forEach(partition => {
      const part = trimmedCardNum.substr(position, partition);
      if (part) numbers.push(part);
      position += partition;
    })

    cardNumber.setValue(numbers.join(' '));

    /* Handle caret position if user edits the number later */
    if (selectionStart < cardNumber.value.length - 1) {
      input.setSelectionRange(selectionStart, selectionStart, 'none');
    }
  }

  
  
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
  
    const trimmed = input.value.replace(/\s+/g, '').slice(0, input.value.indexOf('/')==-1?4:5);
    if (trimmed.length > 3) {
      return (input.value = `${trimmed.slice(0, 2)}/${trimmed.slice(trimmed.indexOf('/')==-1?2:3)}`);
    }
  }

  
  





}

