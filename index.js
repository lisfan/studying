class A {
  constructor() {
    console.log('A constructor')
  }

  log() {
    console.log('A log')
  }
}

class B extends A {
  log() {
    console.log('B log')
    super.log()
  }
}

const a = new A()

const b = new B()

a.log()

b.log()