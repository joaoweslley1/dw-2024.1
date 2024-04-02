/**
 * operator: '+', '-', '*', '/'
 */
export function calc(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1+operand2;
    case '-':
      return operand1-operand2;
    case '*':
      return operand1*operand2;
    case '/':
      if (operand2 === 0) {
        console.log('Erro! Divisão por 0');
        break;
      } else {
        return operand1/operand2;
      }
    default:
      console.log('Operação desconhecida');
      break;
  }
}
