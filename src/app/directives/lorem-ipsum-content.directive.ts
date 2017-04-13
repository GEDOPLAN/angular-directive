import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges } from '@angular/core';
import * as loremIpsum from 'lorem-ipsum';


@Directive({
  selector: '[gedLoremIpsumContent]',
  exportAs: 'loremIpsumContent'
})
export class LoremIpsumContentDirective implements OnChanges {

  @Input('gedLoremIpsumContent')
  length: number;

  @HostBinding('innerHTML')
  innerHTML: string;

  constructor(element: ElementRef) {
    element.nativeElement.style.cursor = 'pointer';
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

}
