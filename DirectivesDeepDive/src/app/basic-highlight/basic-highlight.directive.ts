import {Directive,OnInit,ElementRef} from "@angular/core"
@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}
    ngOnInit(){
      console.log(this.elementRef.nativeElement);
      this.elementRef.nativeElement.style.backgroundColor='green';    
    }

}