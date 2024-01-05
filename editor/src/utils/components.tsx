import { Lens } from "monocle-ts";
import { Writer } from "protobufjs";
import { ReactElement, ReactNode } from "react";

export function field_row(
  name: string,
  value: ReactElement | ReactNode,
  remove?: () => void
): ReactElement {
  return (
    <div className="row">
      <div className="row-label">{name}</div>
      <div className="row-value">{value}</div>
      {remove && (
        <div className="row-remove">
          <button className="button" onClick={remove}>
            Remove
          </button>
        </div>
      )}
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

// Parent -> Child
export function optional_field<
  ParentClass extends ProtoClass<ParentValue>,
  ParentValue,
  ChildValue
>(
  parentProtoClass: ParentClass,
  name: string,
  parent: ParentValue,
  fieldLens: Lens<ParentValue, ChildValue | null | undefined>,
  updateParent: (value: ParentValue) => void,
  component: React.FC<{
    value: ChildValue;
    updateValue: (value: ChildValue) => void;
  }>,
  childFactory: () => ChildValue
): ReactElement {
  const value = fieldLens.get(parent);
  if (value === null || value === undefined) {
    return field_row_add(name, () => {
      let newValue = clone_proto(parentProtoClass, parent);
      newValue = fieldLens.set(childFactory())(parent);
      updateParent(newValue);
    });
  }
  const element: ReactNode = component({
    value,
    updateValue: (v) => {
      let newValue = clone_proto(parentProtoClass, parent);
      newValue = fieldLens.set(v)(parent);
      console.log("newValue", newValue);
      updateParent(newValue);
    },
  });
  return field_row(name, element, () => {
    let newValue = clone_proto(parentProtoClass, parent);
    newValue = fieldLens.set(null as ChildValue)(parent);
    updateParent(newValue);
  });
}

// Parent -> Child[]
export function repeated_field<
  ParentClass extends ProtoClass<ParentValue>,
  ParentValue,
  ChildValue
>(
  parentProtoClass: ParentClass,
  name: string,
  parent: ParentValue,
  fieldLens: Lens<ParentValue, ChildValue[] | null | undefined>,
  updateParent: (value: ParentValue) => void,
  component: React.FC<{
    value: ChildValue;
    updateValue: (value: ChildValue) => void;
  }>,
  childFactory: () => ChildValue
): ReactElement {
  const value = fieldLens.get(parent);
  if (value === null || value === undefined || value.length === 0) {
    return field_row_add(name, () => {
      let newValue = clone_proto(parentProtoClass, parent);
      const newChild = childFactory();
      newValue = fieldLens.set([newChild])(parent);
      updateParent(newValue);
    });
  }
  const elements: ReactNode[] = value.map((v, i) =>
    field_row(
      name,
      component({
        value: v,
        updateValue: (v) => {
          let newValue = clone_proto(parentProtoClass, parent);
          const oldChildren = fieldLens.get(parent) || [];
          oldChildren[i] = v;
          newValue = fieldLens.set(oldChildren)(parent);
          updateParent(newValue);
        },
      })
    )
  );
  return (
    <div>
      {[
        ...elements,
        field_row_add(name, () => {
          let newValue = clone_proto(parentProtoClass, parent);
          const oldChildren = fieldLens.get(parent) || [];
          const newChild = childFactory();
          const newChildren = [...oldChildren, newChild];
          newValue = fieldLens.set(newChildren)(parent);
          updateParent(newValue);
        }),
      ]}
    </div>
  );
}

export interface Props<T> {
  value: T | null | undefined;
  setValue: (value: T) => void;
}

export interface ProtoClass<T> {
  encode(message: T): Writer;
  decode(bytes: Uint8Array): T;
}

export function clone_proto<U, T extends ProtoClass<U>>(c: T, v: U): U {
  // Deep clone.
  const encoded = c.encode(v).finish();
  const newValue = c.decode(encoded);
  return newValue;

  // Shallow clone.
  // return { ...v };
}
