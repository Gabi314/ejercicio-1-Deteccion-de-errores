
const FormatString = require('./codigoCorrecto');


test('test de enunciado 1 ( se quitan una coma y un signo de exclamación)', () => {
  
  const result = FormatString("Lavese las manos, por favor!");
  expect(result).toBe("Lavese las manos por favor");
  });

test('test de enunciado 2 ( se quitan un numeral y un punto. Se toma un guión medio)', () => {
  
    const result = FormatString("Consultar al #0800-999-100."); 
    expect(result).toBe("Consultar al 0800-999-100");
    });
  
test('mensaje de error cuando no hay caracteres permitidos', () => {
  
  const result = FormatString("[#.");  
  expect(result).toBe("ERROR");
  });    

test('mensaje de error cuando la cadena no tiene ningún caracter', () => {
  
  const result = FormatString("");  
  expect(result).toBe("ERROR");
  });    

test('todos los permitidos se mantienen', () => {
  const result = FormatString("¿Ejemplo\-Tex%to_@123_(ABcd)");  
  expect(result).toBe("Ejemplo-Texto_123_ABcd"); 
  });
  
test('Si se toma un número como parámetro, devuelve error de tipos', () => {



  try {

    FormatString(4); 
    
    console.log('Test fallido: No se lanzó el error');
  } catch (error) {
    if (error.message === 'El parámetro no es un string') {
      console.log('Test exitoso: Error lanzado correctamente');
    } else {
      console.log('Test fallido: El mensaje de error es incorrecto');
    }
  }

  });    


  test('Si se toma un NULL como parámetro, devuelve error de tipos', () => {



    try {
  
      FormatString(null); 
      
      console.log('Test fallido: No se lanzó el error');
    } catch (error) {
      if (error.message === 'El parámetro no es un string') {
        console.log('Test exitoso: Error lanzado correctamente');
      } else {
        console.log('Test fallido: El mensaje de error es incorrecto');
      }
    }
  
    });    