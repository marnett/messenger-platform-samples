'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAADh7nZAxd4IBAMJh5oMohj1dvCia6Hw92U6sCbPZCf5hP32XI4DxF4DaFfwZB2eWHrhaTd0Y5WZB1jZArBZBFkShiATk0DW9mNLNuFX3C9jGCdyLcQiZClZAPSoPplxtU93OHwbmILyZCRrNUeiG3G6d02z6BuH8DeBJvVJCYJBuNwZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)