const ast = require('jscode-compare').default;

(async () => {
    // const cmpRes = await ast.compare('./demo.js', './demo2.js', true)
    // console.log(cmpRes)
    await ast.parseCodeToAST('./demo.js', './demo-ast.js');
})()