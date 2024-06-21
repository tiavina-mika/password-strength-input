# password-strength-input

<p align="left">
A React password input with password strength indicator
</p>

## Demo

- **[CodeSandbox live demo](https://codesandbox.io/p/github/tiavina-mika/password-strength-input-demo)**
- **[Live demo](https://password-strength-input.netlify.app/)**

<br />

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

### Override labels and bar colors
#### Override all strength options
```tsx
    <PasswordStrengthInput
      options={{
        tooWeak: {
          label: 'Trop faible',
          color: 'red',
        },
        weak: {
          label: 'Faible',
          color: 'yellow',
        },
        medium: {
          label: 'Moyen',
          color: 'green',
        },
        strong: {
          label: 'Fort',
          color: 'blue'
        },
      }}
    />
```

#### Override only selected strength options
```tsx
    <PasswordStrengthInput
      options={{
        tooWeak: {
          label: 'Trop faible',
          color: 'red',
        },
        weak: {
          label: 'Faible',
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
|barClassName|`string`|empty|Override each bar indicator styles
|strengthLabelClassName|`string`|empty|Override strength label class name
|className|`string`|empty|Class name of text input
|hidePasswordIcon|`ReactNode`|null|Custom icon to hide password
|hidePasswordIcon|`ReactNode`|null|Custom icon to show password

## Contributing

Get started [here](https://github.com/tiavina-mika/password-strength-input/blob/main/CONTRIBUTING.md).
