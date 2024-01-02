import { ReactElement } from "react";

export function field_row(name: string, value: ReactElement): ReactElement {
  return (
    <div className="row">
      <div className="row-label">{name}</div>
      <div className="row-value">{value}</div>
    </div>
  );
}

export function type(name: string, rows: ReactElement[]) {
  return (
    <div className="type">
      <div className="type-name">{name}</div>
      {rows}
    </div>
  );
}

export function field_row_add(name: string, addItem: () => void): ReactElement {
  return (
    <div className="row">
      <div className="row-label">{name}</div>
      <div className="row-value">
        <button className="button" onClick={addItem}>
          Add {name}
        </button>
      </div>
    </div>
  );
}
