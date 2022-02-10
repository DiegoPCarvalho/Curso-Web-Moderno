import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{
  
  // @Input('myForEm') numbers: number[];


  constructor(private container: ViewContainerRef, 
    private template: TemplateRef<any>) { 
      // el.nativeElement.innerHTML = 'olá'
      // console.log('MyFor')
      // private el: ElementRef
    }
    ngOnInit(): void {
    // for(let number of this.numbers){
    //   this.container.createEmbeddedView(
    //     this.template, { $implicit : number})
    // }
  }

}
