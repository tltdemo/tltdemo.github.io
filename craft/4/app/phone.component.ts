import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'phone',
    template: `
    <div [formGroup]="phoneForm">
      <div class="form-group col-xs-6">
        <label>Phone number</label>
        <input type="text" 
               class="form-control" 
               placeholder="Phone" 
               formControlName="phone" 
               phonemask 
               (rawChange)="rawPhone=$event" 
               [attr.maxlength]="14">
        <small *ngIf="phoneForm.controls.phone.hasError('required') && phoneForm.controls.phone.touched" class="text-danger">
            Phone number is required
        </small>
        <small *ngIf="(phoneForm.controls.phone.hasError('minlength') || phoneForm.controls.phone.hasError('maxlength')) && phoneForm.controls.phone.touched" class="text-danger">
            Phone number is to be 10 numbers long
        </small>
      </div>
      <div class="form-group col-xs-6">
        <label>Phone Type</label>
        <select class="form-control" formControlName="phoneType" (ngModelChange)="onClick($event)">
          <option *ngFor="let type of phoneTypes" value="{{type.value}}" title="{{type.desc}}">{{type.name}}</option>
        </select>
      </div>
    </div>
    `
})
export class PhoneComponent {
    @Input('group')
    public phoneForm: FormGroup;
    public phoneTypes = [
      { value: "home", name: "HOME", desc: "For home phone" },
      { value: "sms", name: "SMS", desc: "For text messaging" },
      { value: "tty", name: "TTY", desc: "For the deaf" },
    ]
    
    onClick(phoneType) {
      console.log(phoneType);
    }
}