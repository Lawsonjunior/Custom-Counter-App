# Custom Counter App

This is a simple React application that demonstrates the usage of a custom counter hook with increment, decrement, reset, and setValue functions. It also includes routing and a 404 page.

## Installation

1. Clone this repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd custom-counter-app`
3. Install dependencies: `npm install`

## Usage

### Custom Counter Hook

The custom counter hook can be used in any component. Here's how to use it:

```jsx
import React from 'react';
import useCustomCounter from './useCustomCounter';

function MyComponent() {
  const { count, increment, decrement, reset, setValue } = useCustomCounter(0);

  return (
    // Your component JSX here
  );
}

export default MyComponent;
