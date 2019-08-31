export function getValue({left, right, decimal}) {
    const rightValue = right * 10 ** -(decimal - 1);
    return left + rightValue;
}

const SPLIT_STRING_REGEX = /(-?[0-9]+)\.?([0-9]*)/;

export function getDisplayObject(value) {
    const [, left, right] = SPLIT_STRING_REGEX.exec(value.toString());
    return {
        left: Number(left),
        right: Number(right),
        decimal: right.length,
    }
}

export function calculate(action, left, right) {
    switch (action) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      default:
    }
  }