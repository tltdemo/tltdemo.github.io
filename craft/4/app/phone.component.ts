import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
     moduleId: module.id,
     selector: 'phone',
     templateUrl: 'phone.component.html',
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
