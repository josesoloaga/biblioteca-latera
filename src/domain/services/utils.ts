export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

function generarNumero(numero: number) {
  return (Math.random() * numero).toFixed(0);
}

export function colorRGB() {
  var coolor =
    '(' +
    generarNumero(255) +
    ',' +
    generarNumero(255) +
    ',' +
    generarNumero(255) +
    ')';
  return 'rgb' + coolor;
}
export const capilizefirstLetter = (data: string): string => {
  return data.charAt(0).toUpperCase() + data.slice(1);
};
