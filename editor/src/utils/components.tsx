import { Writer } from "protobufjs";
import { ReactElement, ReactNode } from "react";
import { multiverse } from "../compiled/schema";
import React from "react";

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
      {/* <div className="type-name">{name}</div> */}
      <div className="type-fields">{rows}</div>
    </div>
  );
}

export function field_row_add(name: string, addItem: () => void): ReactElement {
  return (
    <div className="row flex flex-row">
      <div className="row-label">
        {name}
        <button className="inline-button" onClick={addItem}>
          +
        </button>
      </div>
    </div>
  );
}

interface OptionalFieldProps<
  ParentValue,
  FieldName extends keyof ParentValue,
  ChildValue extends ParentValue[FieldName]
> {
  parent: ParentValue;
  fieldName: FieldName;
  updateParent: (value: ParentValue) => void;
  component: FieldEditor<NonNullable<ParentValue[FieldName]>>;
  childFactory: () => ChildValue;
}

export function optional_field<
  ParentValue,
  FieldName extends keyof ParentValue,
  ChildValue extends ParentValue[FieldName]
>(props: OptionalFieldProps<ParentValue, FieldName, ChildValue>) {
  return React.createElement(
    OptionalField<ParentValue, FieldName, ChildValue>,
    props
  );
}

// Parent -> Child
export function OptionalField<
  ParentValue,
  FieldName extends keyof ParentValue,
  ChildValue extends ParentValue[FieldName]
>({
  parent,
  fieldName,
  updateParent,
  component,
  childFactory,
}: OptionalFieldProps<ParentValue, FieldName, ChildValue>): ReactElement {
  const displayName = fieldName.toString();
  const value = parent[fieldName];

  if (value === null || value === undefined) {
    return field_row_add(displayName, () => {
      const newValue = { ...parent, [fieldName]: childFactory() };
      updateParent(newValue);
    });
  }
  const element: ReactNode = component({
    value: value,
    updateValue: (v) => {
      const newValue = { ...parent, [fieldName]: v };
      console.log("newValue", newValue);
      updateParent(newValue);
    },
  });
  return field_row(displayName, element, () => {
    const newValue = { ...parent, [fieldName]: childFactory() };
    updateParent(newValue);
  });
}

type RepeatedFields<T> = {
  [K in keyof T]: T[K] extends Array<any> | null | undefined
    ? T[K] | null
    : never;
  // [K in keyof T as NonNullable<T[K]> extends Array<any> ? K : never]:
  //   | NonNullable<T[K]>
  //   | never;
};

type IfArray<T> = T extends Array<infer U> ? U : never;

type Foo = {
  a: string;
  b: string[] | null;
  c?: string[] | null;
};

type X = RepeatedFields<Foo>;
type Y = RepeatedFields<multiverse.IUniverse>;
type Z = RepeatedFields<Thing>;

type Thing = {
  a: number;
  b: string;
  c: number[];
  d: string[];
  e?: number[]; // Optional array
};

type InnerType<T> = T extends Array<infer U> ? U : never;

interface RepeatedFieldProps<
  ParentValue,
  FieldName extends keyof ParentValue,
  ChildValue extends InnerType<ParentValue[FieldName]>
> {
  parent: ParentValue;
  fieldName: FieldName;
  updateParent: (value: ParentValue) => void;
  component: FieldEditor<NonNullable<InnerType<ParentValue[FieldName]>>>;
  childFactory: () => ChildValue;
}

export function repeated_field<
  ParentValue,
  FieldName extends keyof ParentValue,
  ChildValue extends InnerType<ParentValue[FieldName]>
>(props: RepeatedFieldProps<ParentValue, FieldName, ChildValue>) {
  return React.createElement(
    RepeatedField<ParentValue, FieldName, ChildValue>,
    props
  );
}

// Parent -> Child[]
export function RepeatedField<
  ParentValue,
  FieldName extends keyof ParentValue,
  ChildValue extends InnerType<ParentValue[FieldName]>
>({
  parent,
  fieldName,
  updateParent,
  component,
  childFactory,
}: RepeatedFieldProps<ParentValue, FieldName, ChildValue>): ReactElement {
  const displayName = fieldName.toString();
  const value = Array.isArray(parent[fieldName])
    ? (parent[fieldName] as Array<NonNullable<ChildValue>>)
    : [];

  if (value === null || value === undefined || value.length === 0) {
    return field_row_add(displayName, () => {
      console.log("repeated field row add");
      const newValue = { ...parent, [fieldName]: [childFactory()] };
      updateParent(newValue);
    });
  }
  const elements: ReactNode[] = value.map((v: NonNullable<ChildValue>, i) =>
    field_row(
      displayName,
      component({
        value: v,
        updateValue: (v) => {
          const previousChildren = Array.isArray(parent[fieldName])
            ? (parent[fieldName] as Array<NonNullable<ChildValue>>)
            : [];
          // TODO: fix this hack.
          (previousChildren[i] as any) = v;
          const newValue = {
            ...parent,
            [fieldName]: previousChildren,
          };
          updateParent(newValue);
        },
      })
    )
  );
  return (
    <div>
      {[
        ...elements,
        field_row_add(displayName, () => {
          console.log("repeated update");
          const previousChildren = Array.isArray(parent[fieldName])
            ? (parent[fieldName] as Array<NonNullable<ChildValue>>)
            : [];
          const newValue = {
            ...parent,
            [fieldName]: [...previousChildren, childFactory()],
          };
          updateParent(newValue);
        }),
      ]}
    </div>
  );
}

export interface Props<T> {
  value: T;
  updateValue: (value: T) => void;
}

export interface FieldEditor<T> extends React.FC<Props<T>> {}
