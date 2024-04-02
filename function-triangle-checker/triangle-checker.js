export function triangleChecker(a, b, c) {
   // Checa se um triangulo é escaleno, isosceles ou equilátero
 if (a >= (b+c) || b >= (a+c) || c >= (a+b) || a <= 0 || b <= 0 || c <= 0)  {
  /* Checa se o tamanho de um dos lados não supera a soma dos outros dois
  ou se um dos lados é igual a 0 */
  return 'none'
}

if ((a == b) && (a == c)) {
 return 'equilateral';
} else if (a != b && a != c && b != c) {
  return 'scalene';
} else if (
  ((a == b) && (b != c)) || 
  ((a != b) && (b == c)) || 
  ((a == c) && (c != b))) {
  return 'isosceles';
}
}
