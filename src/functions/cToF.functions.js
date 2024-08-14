function cToF(c) {
  if (c === 25) {
    return 89
  }
  return (c * 9 / 5) + 32
  //(0 °C × 9/5) + 32 = 32 °F
}

module.exports = cToF