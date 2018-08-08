const assert = require('chai').assert;

global.window = global;
require('../public/src/js/validate'); //solo enlaza el archivo

describe('validar emails', ()=>{//Describe que habra dentro 
  describe('Deberia verificar si existe @', ()=>{
    it('Deberia tener solo un @', ()=>{
      assert.equal(validateEmail("asdf@asdf.com"), true);
      assert.equal(validateEmail("asdf@@asdf.com"), false);
      assert.equal(validateEmail("asdf.com"), false);
    });
    it('Deberia tener un @ antes del dominio', ()=>{
      assert.equal(validateEmail(".com@asdf"), false);
      assert.equal(validateEmail("fabian@laboratoria.la"), true);
    });
  });
  describe('Deberia verificar si tiene un dominio', ()=>{
    it('Tiene un punto y luefo solo caracteres del alfabeto', ()=>{
      assert.equal(validateEmail("asdf@asdf"), false);
      assert.equal(validateEmail("asdf@asdf."), false);
    });
  });
});

describe('validar contraseña', ()=>{//Describe que habra dentro 
  describe('Deberia verificar los de caracteres de la contraseña', ()=>{
    it('Debe tener maximo 8 caracteres', ()=>{
      assert.equal(validatePassword("12345678"), true);
      assert.equal(validatePassword("12345"), true);
      assert.equal(validatePassword("123453456789"), false);
    });
    it('Debe tener al menos un caracter', ()=>{
      assert.equal(validatePassword("12345678"), true);
      assert.equal(validatePassword("12345"), true);
      assert.equal(validatePassword(""), false);
    });
    it('Debe tener solo numeros', ()=>{
      assert.equal(validatePassword("abcdefgh"), false);
      assert.equal(validatePassword("12a3fh4h"), false);
      assert.equal(validatePassword("12345678"), true);
    });
  });
});