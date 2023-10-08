import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

const OUTPUT_CLR = 'color: cyan'; // output color

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  oldMessage: string = 'Initial val';

  @Input() message: string = '';

  @ViewChild('messageParagraph')
  messageParagraph!: ElementRef<HTMLParagraphElement>;

  @ContentChild('projectedParagraph')
  projectedParagraph!: ElementRef<HTMLParagraphElement>;

  constructor() {
    console.log('%cDemoComponent constructor', OUTPUT_CLR);
    console.log('%cmessage: %s', OUTPUT_CLR, this.message);
    console.log();
  }

  /**
   * Runs when the component's data-bound properties (input properties) change.
   * @Input() properties have been initialized.
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cDemoComponent ngOnChanges', OUTPUT_CLR);
    console.log('%cSimplechanges: %o', OUTPUT_CLR, changes);
    console.log('%cmessage: %s', OUTPUT_CLR, this.message);
    this.message = 'Hello from DemoComponent';
    if (this.oldMessage !== this.message) {
      console.log('%cMessage changed', OUTPUT_CLR);
      console.log('%cOld message: %s', OUTPUT_CLR, this.oldMessage);
      console.log('%cNew message: %s', OUTPUT_CLR, this.message);
    }
    console.log();
  }

  // Runs once after the component's data-bound properties have been initialized.
  ngOnInit(): void {
    console.log('%cDemoComponent ngOnInit', OUTPUT_CLR);
    console.log('%cmessage: %s', OUTPUT_CLR, this.message);
    console.log(
      'Message element content:',
      this.messageParagraph?.nativeElement.textContent
    );
    console.log();
  }

  /**
   * Runs during every change detection cycle.
   * Useful for checking for changes that Angular doesn't catch on its own,
   * such as changes to object properties.
   */
  ngDoCheck(): void {
    console.log('%cDemoComponent ngDoCheck', OUTPUT_CLR);
    // Projected paragraph undefined in the first change detection cycle until ngAfterContentInit() runs.
    console.log(
      '%cProjected Paragraph: %o',
      OUTPUT_CLR,
      this.projectedParagraph
    );
    console.log();
  }

  /**
   * Runs once after the component's content has been initialized.
   * @ContentChild() and @ContentChildren() properties have been initialized.
   * Available only if the component has content projection.
   * Available to components only, not directives.
   */
  ngAfterContentInit(): void {
    console.log('%cDemoComponent ngAfterContentInit', OUTPUT_CLR);
    console.log(
      '%cProjected Paragraph Content: %s',
      OUTPUT_CLR,
      this.projectedParagraph.nativeElement.textContent
    );
  }

  /**
   * Runs during every change detection cycle and after ngAfterContentInit().
   * Useful for checking for changes that Angular doesn't catch on its own,
   * @ContentChild() and @ContentChildren() properties have been updated.
   * Available to components only, not directives.
   */
  ngAfterContentChecked(): void {
    console.log('%cDemoComponent ngAfterContentChecked', OUTPUT_CLR);
    console.log(
      '%cProjected Paragraph Content: %s',
      OUTPUT_CLR,
      this.projectedParagraph.nativeElement.textContent
    );
    console.log(
      '%c%s %s %s',
      OUTPUT_CLR,
      'Message element content still uninitialized in first run',
      'or contains old value after a change detection cycle:',
      this.messageParagraph?.nativeElement.textContent
    );
    console.log();
  }

  /**
   * Runs once after the component's view has been initialized.
   * The view is the component's template.
   * Runs after all of the lifecycle hooks and directives of the child components
   * @ViewChild() and @viewChildren() have been resolved.
   * Available to components only, not directives.
   */
  ngAfterViewInit(): void {
    console.log('%cDemoComponent ngAfterViewInit', OUTPUT_CLR);
    console.log(
      'Message element content has been initialized:',
      this.messageParagraph?.nativeElement.textContent
    );
    console.log();
  }

  /**
   * Runs during every change detection cycle and after ngAfterViewInit().
   * Useful for checking for changes that Angular doesn't catch on its own,
   * @ViewChild() and @viewChildren() properties have been updated.
   * Available to components only, not directives.
   */
  ngAfterViewChecked(): void {
    console.log('%cDemoComponent ngAfterViewChecked', OUTPUT_CLR);
    console.log(
      'Message element content still initialized and my have change:',
      this.messageParagraph?.nativeElement.textContent
    );
    console.log();
  }

  ngOnDestroy(): void {
    console.log('%cDemoComponent ngOnDestroy', OUTPUT_CLR);
    console.log();
  }
}
