const display = document.querySelector('.js-display')

const btns = document.querySelectorAll('.js-btn')

btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    try {
      let itemText = e.target.textContent
      if (display.value !== 'ОШИБКА') {
        if (itemText === 'x') {
          itemText = '*'
        }
        if (itemText === 'AC') {
          display.value = '0'
        }
        if (itemText === 'C') {
          if (display.value.length <= 1) {
            display.value = '0'
          } else {
            display.value = display.value.slice(0, -1)
          }
        }
        if (itemText === '=') {
          display.value = eval(display.value)
        }
        if (itemText !== 'C' && itemText !== 'AC' && itemText !== '=') {
          if (
            display.value === '0' &&
            itemText !== '.' &&
            itemText !== '/' &&
            itemText !== '*' &&
            itemText !== '+' &&
            itemText !== '-'
          ) {
            display.value = itemText
          } else {
            display.value += itemText
          }
        }
        if (display.value === 'undefined') {
          display.value = 'ОШИБКА'
        }
      }
      if (itemText === 'AC') {
        display.value = '0'
      }
    } catch (error) {
      display.value = 'ОШИБКА'
    }
  })
})

document.addEventListener('keydown', function (event) {
  try {
    let itemText = event.code.split('')[5]
    if (display.value !== 'ОШИБКА') {
      if (event.code === 'Equal') {
        display.value += '+'
      }
      if (event.code === 'Minus') {
        display.value += '-'
      }
      if (event.code === 'BracketLeft') {
        display.value += '*'
      }
      if (event.code === 'Slash') {
        display.value += '/'
      }
      if (event.code === 'Period') {
        display.value += '.'
      }
      if (event.code === 'Enter') {
        event.preventDefault()
        display.value = eval(display.value)
      }
      if (event.code === 'Delete') {
        event.preventDefault()
        display.value = '0'
      }
      if (
        event.code === 'Digit1' ||
        event.code === 'Digit2' ||
        event.code === 'Digit3' ||
        event.code === 'Digit4' ||
        event.code === 'Digit5' ||
        event.code === 'Digit6' ||
        event.code === 'Digit7' ||
        event.code === 'Digit8' ||
        event.code === 'Digit9' ||
        event.code === 'Digit0'
      ) {
        if (display.value === '0' && itemText !== '.') {
          display.value = itemText
        } else {
          display.value += itemText
        }
      }
      if (event.code === 'Backspace') {
        if (display.value.length <= 1) {
          display.value = '0'
        } else {
          display.value = display.value.slice(0, -1)
        }
      }
    }
  } catch (error) {
    display.value = 'ОШИБКА'
  }
})
