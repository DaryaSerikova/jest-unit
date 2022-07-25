const mapArrToString = require('./mapArrToString'); //импортируем


describe('mapArrToString', () => { //обертка над всеми тестами
  test('Корректное значение', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']); 
    //массивы в JS равны друг другу только если это один и тот же массив. Два одинаковых массива считаются разными.
    //поэтому в данном случае вместо toBe мы используем toEqual
  })
  test('Мешанина', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'sdjhsdj'])).toEqual(['1', '2', '3']); 
  })
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([]); 
  })
  test('Отрицание', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]); //первый массив не равен второму
  })
})