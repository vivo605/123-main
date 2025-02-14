export {}

abstract class BaseClass {
  test = 'Тест'
  abstract readonly id: number

  getText() {
    return `id = ${this.id}`
  }
}

class Container extends BaseClass {
  static readonly info = 'это просто контейнер'

  #id = 1

  constructor(startId: number) {
    super()
    this.#id = startId
  }

  get id() {
    return this.#id
  }

  set id(value) {
    if (value > 0) {
      this.#id = value
    } else {
      console.warn('Ай ай плохо))')
    }
  }

  print() {
    print(this.test)
  }
}

const c = new Container(10)
// c.#id = 2
c.id = 2
c.id // 2
c.id = -1
c.id // 2

Container.info

console.log(c, c.test) // Container { id: 1 }
console.log(c instanceof Container)
