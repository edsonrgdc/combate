function combateAtaque(atacante, defensor) {

  let bonusArma = 0
  if (atacante.arma !== null) {
    bonusArma = atacante.arma.bonus
  }

  let bonusEscudo = 0
  if (defensor.escudo !== null) {
    bonusEscudo = defensor.escudo.bonus
  }

  const atacar = (atacante.ataque + bonusArma - defensor.defesa - bonusEscudo)

  if (atacar < 0) {
    return 0
  }

  return atacar
}

function verificaSeDeuCerto(cenario, resultadoEsperado, atacante, defensor) {
  const resultado = combateAtaque(atacante, defensor)

  if (resultado == resultadoEsperado) {
    console.log(cenario + '  dano  ' + resultado)
  } else {
    console.log(cenario + '  defesa  ' + resultado)
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
