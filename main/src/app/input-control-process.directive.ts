import { Directive , Input, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[InputControlProcess]'
})
export class InputControlProcessDirective {
@Input() InputControlProcess;
  constructor(private el: ElementRef) { 

  }
  @HostListener('blur') onBlur(){
    let val: String = this.el.nativeElement.value;
    if(this.InputControlProcess ==  'lowercase')
    this.el.nativeElement.value = val.toLowerCase();
    else
    this.el.nativeElement.value = val.toUpperCase();
  }

}
