const {printTime} = require('../misc/time')

/* Coin Flip */
const coin = ['Heads', 'Tails'] // A coin have heads and tails

function coinFlip (id) {
  console.log(`[${printTime()}] funExt.coinFlip`)
  const flip = coin[Math.floor(Math.random() * coin.length)]
  const result = `<@${id}> flipped the coin...**${flip}**`
  return result
}

module.exports = coinFlip
