import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';
import * as loremIpsum from 'lorem-ipsum';


@Directive({
  selector: '[gedLoremIpsumContent]',
  exportAs: 'loremIpsumContent',
  host: {
    'class': 'demo',
    '(mouseenter)': 'mouseEnter()'
  }
})
export class LoremIpsumContentDirective implements OnChanges {

  @Input('gedLoremIpsumContent')
  length: number;

  @HostBinding('innerHTML')
  innerHTML: string;

  constructor(element: ElementRef, renderer: Renderer2) {
    element.nativeElement.style.cursor = 'pointer';
    renderer.setStyle(element.nativeElement, "border", "1px solid black");
  }

  ngOnChanges() {
    this.generate();
  }

  @HostListener('click', ['$event'])
  onHostClick($event) {
    this.generate();
  }

  private generate() {
    this.innerHTML = loremIpsum({ count: this.length });
  }

  mouseEnter() {
    console.log("MouseEneter...");
  }

}
