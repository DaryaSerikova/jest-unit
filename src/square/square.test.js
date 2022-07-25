const square = require('./square'); //импортируем


describe('square', () => { //обертка над всеми тестами
  
  let mockValue;

  // Перед каждым тестом//Отрабатывается каждый раз
  beforeEach(() => {
    // ДОБАВИТЬ ЧТО_ТО В БД
  })

  //Один раз перед всеми тестами
  beforeAll(() => {

  })
  
  test('Корректное значение', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    

    //Хотим проверить вызывается ли pow
    const spyMathPow = jest.spyOn(Math, 'pow'); // (модульб метод) //замокали тот самый метод
    square(2) //нужно вызвать ф-цию и передать туда 2ку
    expect(spyMathPow).toBeCalledTimes(1);
    //т.е. с 2кой этот метод должен отработать 1 раз
  })

  test('Корректное значение', () => {

    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1) 
    expect(spyMathPow).toBeCalledTimes(0);
  })

  //после каждого теста
  afterEach(() => {
    //УДАЛИТЬ ИЗ БД
    jest.clearAllMocks()
  })

  //после всех соответственно
  // afterAll()

})