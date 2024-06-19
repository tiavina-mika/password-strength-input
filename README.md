# password-strength-input

<p align="left">
A React password input with password strength indicator
</p>


![Gif](https://github.com/tiavina-mika/password-strength-input/blob/main/screenshots/example.gif)

## Installation

```shell
npm install password-strength-input
```
or
```shell
yarn add password-strength-input
```

### Simple usage

```tsx
import PasswordStrengthInput from 'password-strength-input';

function App() {
  return (
    <PasswordStrengthInput />
  );
}
```

### Custom labels and bar colors
#### customize all strength options
```tsx
    <PasswordStrengthInput
      options={{
        tooWeak: {
          label: 'Too weak 2',
          color: 'red',
        },
        weak: {
          label: 'Weak 2',
          color: 'yellow',
        },
        medium: {
          label: 'Medium 2',
          color: 'green',
        },
        strong: {
          label: 'Strong 2',
          color: 'blue'
        },
      }}
    />
```

#### custom selected strength options
```tsx
    <PasswordStrengthInput
      options={{
        tooWeak: {
          label: 'Too weak 2',
          color: 'red',
        },
        weak: {
          label: 'Weak 2',
        },
        medium: {
          color: 'green',
        },
      }}
    />
```

### Custom styles

```tsx
  <PasswordStrengthInput
    barClassName="!w-[50px]"
    strengthLabelClassName="!text-xl"
    className="!w-full
  />
```

### Custom icons

```tsx
  <PasswordStrengthInput
    hidePasswordIcon={<EyeOff />}
    showPasswordIcon={<EyeOn />}
  />
```

### Material-UI TextField props

```tsx
  <PasswordStrengthInput
    placeholder="Enter your password"
  />
```

See [`here`](https://github.com/tiavina-mika/password-strength-input/tree/main/example) for more examples that use `PasswordStrengthInput`.

## Props

|props |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|options|`Options`|null|Options to override colors and labels of each strength
|barClassName|`string`|empty|custom class name of the each bar indicator
|strengthLabelClassName|`string`|empty|custom class name of the strength label
|className|`string`|empty|custom class name of text input
|hidePasswordIcon|`ReactNode`|null|custom icon to hide password
|hidePasswordIcon|`ReactNode`|null|custom icon to show password

## Contributing

Get started [here](https://github.com/tiavina-mika/password-strength-input/blob/main/CONTRIBUTING.md).
