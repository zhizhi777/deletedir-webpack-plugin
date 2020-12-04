const del = require('del')
const { validate } = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    exclude:{
      type: 'string'
    }
  }
}

module.exports = class CleanPlugin{
  constructor(options = {exclude: ''}){
    this.options = options
    validate(schema, options, 'Clean Plugin')
  }

  apply(compiler){
    compiler.hooks.emit.tapAsync('CleanPlugin',(compilation, callback)=>{
      let delFile = [`${compiler.options.output.path}/**`,`!${compiler.options.output.path}`,`!${compiler.options.output.path}/${this.options.exclude}`]
      del(delFile)
        .then(()=>{
          callback()
        })
    })
  }
  
}