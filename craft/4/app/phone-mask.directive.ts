//our root app component
import {Directive, Output, EventEmitter} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[formControlName][phonemask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
    '(keydown.backspace)':'onInputChange($event.target.value, true)'
  }
})
export class PhoneMaskDirective {
  constructor(public model: NgControl) {}
  
  @Output() rawChange:EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event, backspace) {
    // remove all mask characters (keep only numeric)
    let newVal = event.replace(/\D/g, '');
    let rawValue = newVal;
    
    // special handling of backspace necessary otherwise deleting
    // of non-numeric characters is not recognized this leaves
    // room for improvement for example if you backspace in the
    // middle of the string (delete works fine)
    if (backspace && newVal.length < 5) {
      newVal = newVal.substring(0, newVal.length-1);
    }

    newVal = this.maskValue(newVal);

    // set the new value
    this.model.valueAccessor.writeValue(newVal);      
    this.rawChange.emit(rawValue)
  }
  
  private maskValue(val: string): string {
        // don't show braces for empty value
    if(val.length == 0) {
      val = '';
    } 
    // don't show braces for empty groups at the end
    else if(val.length <= 3) {
      val = val.replace(/^(\d{0,3})/, '($1)');
    } else if(val.length <= 6) {
      val = val.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    } else {
      val = val.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
    }
    return val;
  }
}