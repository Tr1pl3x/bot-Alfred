// Imports
const { rpsInvalid1, rpsInvalid2, rpsWin, rpsLose, rpsTie } = require('../misc/prompts')
const printTime = require('../misc/time')
const choices = ['rock', 'paper', 'scissors']

function rpsFunc (cmd) {
  console.log(`[${printTime()}] funExt.rps`)

  // If the user didn't provide a choice,
  // prompt them for one
  if (cmd.length < 2) return rpsInvalid1

  // Get the user's choice and validate it
  const userChoice = cmd[1]
  if (!choices.includes(userChoice)) return rpsInvalid2

  // bot picks a random from the choices array.
  const botChoice = choices[Math.floor(Math.random() * choices.length)]

  // Determine the winner with outcomes
  let result
  if (userChoice === botChoice) {
    result = rpsTie
  } else if ((userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')) {
    result = rpsWin
  } else {
    result = rpsLose
  }

  // Reconstruct into format for the return
  const str = `*You* chose **${userChoice}**, *Alfred* chose **${botChoice}**.\n\t ${result}`
  return str
}

module.exports = rpsFunc
