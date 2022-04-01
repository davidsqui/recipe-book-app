import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  private dropdown: HTMLElement;
  private dropdownMenu: Element | null;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.dropdown = this.elementRef.nativeElement;
    this.dropdownMenu = this.dropdown
      .getElementsByClassName('dropdown-menu')
      .item(0);
  }

  // @HostListener('click') toogleOpen() {
  //   this.dropdown = this.elementRef.nativeElement;
  //   this.dropdownMenu = this.dropdown
  //     .getElementsByClassName('dropdown-menu')
  //     .item(0);
  //   this.renderer.addClass(this.dropdownMenu, 'show');
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.elementRef.nativeElement.contains(event.target)
      ? this.renderer.addClass(this.dropdownMenu, 'show')
      : this.renderer.removeClass(this.dropdownMenu, 'show');
  }
}
