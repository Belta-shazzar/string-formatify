# string-formatify

A simple string formatter utility library for JavaScript.

## Installation

```bash
npm install string-formatify
```

## Usage

```javascript
const { slugify, capitalize, camelCase } = require('string-formatify');

// Slugify
slugify('Hello World!');  // 'hello-world'

// Capitalize
capitalize('hello world');  // 'Hello world'

// CamelCase
camelCase('hello world');  // 'helloWorld'
```

## API

### slugify(str)

Converts a string to a URL-friendly slug.

- **Parameters**: `str` (string) - The string to slugify
- **Returns**: (string) - The slugified string

### capitalize(str)

Capitalizes the first letter of a string.

- **Parameters**: `str` (string) - The string to capitalize
- **Returns**: (string) - The capitalized string

### camelCase(str)

Converts a string to camelCase.

- **Parameters**: `str` (string) - The string to convert
- **Returns**: (string) - The camelCased string

## License

MIT