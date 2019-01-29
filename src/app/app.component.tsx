import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { createElement, Renderable } from 'ng-vdom';

@Component({
  selector: 'app-root',
  template: '',
})
export class AppComponent extends Renderable {
  title = 'angular-jsx-sample';
  name = 'Bob';

  sendValue(value: string) {
    this.name = value;
  }

  render() {
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
  @Input() send: (value: EventTarget) => void;
  // @Output() sendValue: EventEmitter<string> = new EventEmitter<string>();

  inputValue: EventTarget;

  handleClick() {
    this.send(this.inputValue);
  }

  handleChange(event: Event) {
    this.inputValue = (event.target as any).value as EventTarget;
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
