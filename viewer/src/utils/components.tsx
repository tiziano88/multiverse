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

export function type(name: string, rows: (ReactElement | null | undefined)[]) {
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

interface OptionalFieldProps<ParentValue, FieldName extends keyof ParentValue> {
  parent: ParentValue;
  fieldName: FieldName;
  component: FieldViewer<NonNullable<ParentValue[FieldName]>>;
}

// Parent -> Child
export function OptionalField<
  ParentValue,
  FieldName extends keyof ParentValue
>({
  parent,
  fieldName,
  component,
}: OptionalFieldProps<ParentValue, FieldName>): ReactElement {
  const displayName = fieldName.toString();
  const value = parent[fieldName];

  if (value === null || value === undefined) {
    return <></>;
  }
  const element: ReactNode = component({
    value: value,
  });

  return (
    <div className="row">
      <div className="row-label">{displayName}</div>
      <div className="row-value">{element}</div>
    </div>
  );
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

interface RepeatedFieldProps<ParentValue, FieldName extends keyof ParentValue> {
  parent: ParentValue;
  fieldName: FieldName;
  component: FieldViewer<NonNullable<InnerType<ParentValue[FieldName]>>>;
}

// Parent -> Child[]
export function RepeatedField<
  ParentValue,
  FieldName extends keyof ParentValue,
  ChildValue extends InnerType<ParentValue[FieldName]>
>({
  parent,
  fieldName,
  component,
}: RepeatedFieldProps<ParentValue, FieldName>): ReactElement {
  const displayName = fieldName.toString();
  const value = Array.isArray(parent[fieldName])
    ? (parent[fieldName] as Array<NonNullable<ChildValue>>)
    : [];

  if (value === null || value === undefined || value.length === 0) {
    return <></>;
  }
  const elements: ReactNode[] = value.map((v: NonNullable<ChildValue>, i) =>
    field_row(
      displayName,
      component({
        value: v,
      })
    )
  );
  return <div>{[...elements]}</div>;
}

export interface Props<T> {
  value: T;
  updateValue: (value: T) => void;
}

export interface FieldEditor<T> extends React.FC<Props<T>> {}

export interface PropsViewer<T> {
  value: T;
}
export interface FieldViewer<T> extends React.FC<PropsViewer<T>> {}
