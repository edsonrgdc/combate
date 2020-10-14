function combateAtaque(atacante, defensor) {
  const atacar = (atacante.ataque + atacante.arma.bonus - defensor.defesa - defensor.escudo.bonus)
  return atacar
}

function verificaSeDeuCerto(cenario, resultadoEsperado, atacante, defensor) {
  const resultado = combateAtaque(atacante, defensor)

  if (resultado == resultadoEsperado) {
    console.log(cenario + 'dano')
  } else {
    console.log(cenario + 'defesa')
  }
}

verificaSeDeuCerto('01', 0, { ataque: 0, arma: null }, { defesa: 0, escudo: null })
verificaSeDeuCerto('02', 8, { ataque: 9, arma: null }, { defesa: 1, escudo: null })
verificaSeDeuCerto('03', 0, { ataque: 1, arma: null }, { defesa: 9, escudo: null })
verificaSeDeuCerto('04', 2, { ataque: 0, arma: { bonus: 2 } }, { defesa: 0, escudo: null })
verificaSeDeuCerto('05', 5, { ataque: 3, arma: { bonus: 2 } }, { defesa: 0, escudo: null })
verificaSeDeuCerto('06', 4, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: null })
verificaSeDeuCerto('07', 3, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 1 } })
verificaSeDeuCerto('08', 2, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 2 } })
verificaSeDeuCerto('09', 0, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 5 } })
verificaSeDeuCerto('10', 9, { ataque: 9, arma: { bonus: 9 } }, { defesa: 5, escudo: { bonus: 4 } })

const J1 = {
  ataque: 300,
  defesa: 300,
  arma: {
    bonus: null
  },
  escudo: {
    bonus: null
  }
}

const J2 = {
  ataque: 500,
  defesa: 500,
  arma: {
    bonus: null
  },
  escudo: {
    bonus: null
  }
}

verificaSeDeuCerto('01', 0, J1, J2)