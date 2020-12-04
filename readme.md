# Clean plugin for webpack
 A webpack plugin to clean `output.path` folder for webpack project.

## Installation

```bash
npm install --save-dev deletedir-webpack-plugin
```

## Usage

```js
const deletedirWebpackPlugin = require('deletedir-webpack-plugin')
module.exports = {
  ···
   plugins: [
     //clean out.path folder
     new deletedirWebpackPlugin()
   ]
  ···
}

module.exports = {
  ···
   plugins: [
     //exclude note.md folder
     new deletedirWebpackPlugin({exclude: 'note.md'})
   ]
  ···
}
```

