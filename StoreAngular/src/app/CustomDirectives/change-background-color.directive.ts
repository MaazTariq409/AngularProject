import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[ChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective implements OnInit  {

  @HostBinding('style.backgroundColor') backgroundcolor : string = 'yellow';

  constructor(private elementRef :ElementRef, private render : Renderer2) { }

  
  ngOnInit(): void {
  // this.elementRef.nativeElement.style.backgroundColor = 'green'
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.render.setStyle(this.elementRef.nativeElement, "backgroundColor", "blue")
    this.backgroundcolor = 'blue'
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.render.setStyle(this.elementRef.nativeElement, "backgroundColor", "transparent")
    this.backgroundcolor = 'transparent'
  }
}
