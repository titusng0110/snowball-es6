# Snowball Porter ES6

A JavaScript ES6 port of the Snowball Porter stemming algorithm. See https://github.com/snowballstem/snowball

## Description

This is a modern JavaScript port of the Snowball stemming algorithm, converted from the original JavaScript implementation in Snowball v2.2.0. The code has been updated to use ES6 modules and classes while maintaining the original algorithm's functionality. You can just import it in your React project.

## Usage

```javascript
import SnowballEn from './SnowballEn.js';

const stemmer = new SnowballEn();

// Example usage
console.log(stemmer.stemWord('running'));  // Outputs: 'run'
console.log(stemmer.stemWord('conditional'));  // Outputs: 'condit'
console.log(stemmer.stemWord('happiness'));  // Outputs: 'happi'
```

## License

Same as the original Snowball project.
