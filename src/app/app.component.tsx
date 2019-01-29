import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { createElement, Renderable } from 'ng-vdom';

@Component({
  selector: 'app-root',
  template: '',
})
export class AppComponent extends Renderable {
  title = 'angular-jsx-sample';
  name = 'Bob';

  sendValue(value: string): void {
    this.name = value;
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>{this.title}</h1>
        <HelloComponent name={this.name} send={this.sendValue} />
      </div>
    );
  }
}

@Component({
  template: '',
})
export class HelloComponent extends Renderable {
  @Input() name: string;
  @Input() send: (value: string) => void;
  // @Output() sendValue: EventEmitter<string> = new EventEmitter<string>();

  inputValue: string;

  handleClick(): void {
    this.send(this.inputValue);
  }

  handleChange(event: Event): void {
    this.inputValue = ((event.target as any) as HTMLInputElement).value;
  }

  render(): JSX.Element {
    return (
      <div>
        <h2>Hello {this.name} !</h2>
        <input type="text" onInput={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>submit</button>
      </div>
    );
  }
}
