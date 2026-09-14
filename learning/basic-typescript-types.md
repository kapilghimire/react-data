# Basic TypeScript Types and How They Are Used

TypeScript adds types to JavaScript so we can catch mistakes early and make code easier to understand.

## Why use basic types?

Basic types help us define what kind of value a variable, function parameter, or object property should hold.

Examples:

- a name should be a string
- an age should be a number
- a user is active or not should be a boolean
- a list of IDs should be an array

This makes the code safer and easier to maintain.

## Common basic types

### 1. string

Used for text values.

```ts
const name: string = "Aisha";
const message: string = "Hello React";
```

### 2. number

Used for numeric values, including integers and decimals.

```ts
const age: number = 28;
const price: number = 49.99;
```

### 3. boolean

Used for true/false values.

```ts
const isLoggedIn: boolean = true;
const hasAccess: boolean = false;
```

### 4. array

Used for a list of values of the same type.

```ts
const skills: string[] = ["HTML", "CSS", "TypeScript"];
const scores: number[] = [90, 85, 88];
```

### 5. object

Used for structured data.

```ts
const speaker = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  isFeatured: true,
};
```

You can also type the object explicitly:

```ts
type Speaker = {
  id: number;
  firstName: string;
  lastName: string;
  isFeatured: boolean;
};

const speaker: Speaker = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  isFeatured: true,
};
```

### 6. null and undefined

These represent missing values.

```ts
const middleName: string | null = null;
const nickname: string | undefined = undefined;
```

The `|` symbol means "either this type or that type".

### 7. any

`any` means TypeScript should not check the value.

```ts
let value: any = "hello";
value = 123;
value = true;
```

This is flexible, but it removes safety, so use it only when necessary.

## Function example

Types are very useful in function parameters and return values.

```ts
function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

const fullName = formatName("Rahul", "Sharma");
console.log(fullName);
```

This helps catch errors like:

```ts
formatName(123, "Sharma");
```

TypeScript will warn because `123` is not a `string`.

## Example in React

In a component, you can type props clearly.

```tsx
type SpeakerCardProps = {
  name: string;
  age: number;
  isActive: boolean;
};

function SpeakerCard({ name, age, isActive }: SpeakerCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}
```

This makes it much easier to understand what data the component expects.

## Beginner takeaway

Basic TypeScript types are used to describe values so the code is:

- safer
- easier to read
- easier to debug
- less likely to break during development

A simple rule is:

- use `string` for text
- use `number` for numbers
- use `boolean` for true/false
- use `[]` for arrays
- use object types for structured data

Once you master these basics, TypeScript becomes much easier to use in React and real projects.
