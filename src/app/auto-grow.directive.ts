
import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(input)': 'setWidth()'
    }
})

export class AutoGrowDirective {

    @HostListener('input', ['$event.target'])
    onInput(input: HTMLTextAreaElement): void {
        this.adjust();
    }
 
    constructor(public element: ElementRef) {
    }
 
    ngAfterContentChecked(): void {
        this.adjust();
    }
 
    adjust(): void {
        let nativeElement = this.element.nativeElement;
        //nativeElement.style.overflow = 'hidden';
        //nativeElement.style.width = 'auto';
        nativeElement.style.width = "px"; //nativeElement.scrollwidth + "px";
    }
}