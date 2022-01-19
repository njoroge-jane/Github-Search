import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnHover]',
})
export class OnHoverDirective {
  @Input('appOnHover') hoverfont: string = '';

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.hoverfont || '20px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('none');
  }

  private hover(color: string) {
    this.el.style.fontSize = '20px';
  }
}
