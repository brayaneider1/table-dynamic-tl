import { LitElement, html, PropertyValues } from 'lit';
import { customElement,property  } from 'lit/decorators.js';

@customElement('table-dynamic')
export class TableDynamic extends LitElement {
  @property({ type: Array }) headers: string[] = [];
  @property({ type: Array }) body: string[][] = [];

  static get observedAttributes(): string[] {
    return ['headers', 'body'];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    super.attributeChangedCallback(name, oldVal, newVal);

    if (name === 'headers') {
      this.headers = JSON.parse(newVal);
    } else if (name === 'body') {
      this.body = JSON.parse(newVal);
    }
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('headers')) {
      // Headers have changed, do something
    }

    if (changedProperties.has('body')) {
      // Body has changed, do something
    }
  }

  renderHeaderRow() {
    return html`
      <tr>
        ${this.headers.map(header => html`<th>${header}</th>`)}
      </tr>
    `;
  }

  renderBodyRows() {
    return html`
      ${this.body.map(row => html`<tr>${row.map(cell => html`<td>${cell}</td>`)}</tr>`)}
    `;
  }

  render() {
    return html`
      <div class="table-container">
        <table>
          <thead>
            ${this.renderHeaderRow()}
          </thead>
          <tbody>
            ${this.renderBodyRows()}
          </tbody>
        </table>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap{
    'table-dynamic-tl':TableDynamic
    
  }

}
