# BuildCSS

A lightweight, utility-first CSS framework with reusable UI components, designed for speed, scalability, and simplicity.

## Features

- **Utility-First Approach**: Quickly build custom designs using utility classes
- **Responsive Design**: Mobile-first approach with built-in responsive utilities
- **Dark Mode Support**: Automatic dark mode detection and styling
- **Flexible Components**: Reusable components with customizable styles
- **Modern Color Palette**: Carefully selected color scheme with semantic naming

## Installation

Add the following line to your HTML file:

```html
<link rel="stylesheet" href="path/to/build.css">
```

## Usage

### Typography

```html
<p class="text-xs">Extra Small Text</p>
<p class="text-sm">Small Text</p>
<p class="text-base">Base Text</p>
<p class="text-lg">Large Text</p>
<p class="text-xl">Extra Large Text</p>

<p class="font-light">Light Weight</p>
<p class="font-normal">Normal Weight</p>
<p class="font-bold">Bold Weight</p>
```

### Buttons

```html
<button class="btn bg-lightblue text-dark">Primary Button</button>
<button class="btn bg-lightgreen text-dark">Secondary Button</button>
<button class="btn bg-lightyellow text-dark">Accent Button</button>
```

### Layout

```html
<div class="flex flex-col gap-3">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
</div>
```

### Spacing

```html
<div class="m-3 p-3">Margin and Padding</div>
```

### Search Bar

```html
<input type="text" class="search-bar" placeholder="Search...">
```

## Color System

- `bg-lightblue`: Primary color
- `bg-lightgreen`: Secondary color
- `bg-lightyellow`: Accent color
- `bg-lightcoral`: Danger color
- `bg-lightskyblue`: Success color
- `bg-lightgoldenrodyellow`: Warning color

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License 