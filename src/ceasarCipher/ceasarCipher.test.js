import ceasar from './ceasarCipher'

it('Test', () => {
    expect(ceasar('hello world secret', 13)).toEqual('uryyb jbeyq frperg')
})