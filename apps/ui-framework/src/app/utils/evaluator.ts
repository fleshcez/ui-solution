export function evaluator(textExpression: any, contextData:any){
    const fn = Function(`"use strict"; var $model = this;return (${textExpression})`)
    return fn.bind(contextData)();
  }