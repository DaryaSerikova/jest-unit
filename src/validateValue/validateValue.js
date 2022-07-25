const validateValue = (value) => {
  if (value < 0 || value > 100) {
    return false;
  }
  return true;
}

module.exports = validateValue; //Т.к. export'ы у нас не настроены, будем использовать Node.js
//работает, как обычный export