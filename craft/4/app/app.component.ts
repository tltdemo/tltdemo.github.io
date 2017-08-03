import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([]),
            phones: this._fb.array([])
        });
        
        // add address
        this.addAddress();
        
        let pArr = [
          {phone: "(502) 555-1234", phoneType: "sms"}, 
          {phone: "(502) 555-1111", phoneType: "home"}, 
          {phone: "(502) 555-9876", phoneType: "tty"}
          ];
        pArr.forEach(p => this.addPhone(p));
        // this.addPhone();
        
        /* subscribe to addresses value changes */
        // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }
    
    initPhone(p?: {phone: string, phoneType: string}) {
      let pVal = { phone: '', phoneType: '' };
      if (p) { pVal = p; }

     let valids = Validators.compose([
        Validators.required, 
        Validators.minLength(14), 
        Validators.maxLength(14),
        ]);
      return this._fb.group({
        phone: [pVal.phone, valids],
        phoneType: [pVal.phoneType]
      })
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        const addrCtrl = this.initAddress();
        
        control.push(addrCtrl);
        
        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }
    
    addPhone(p?: {phone: string, phoneType: string}) {
        const control = <FormArray>this.myForm.controls['phones'];
        const phnCtrl = this.initPhone(p);
        
        control.push(phnCtrl);
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    removePhone(i: number) {
        const control = <FormArray>this.myForm.controls['phones'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
        
    }
}