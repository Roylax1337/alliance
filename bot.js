var data

function Start(once) {
  const RandMSG = () => `PRIVMSG #${data.channel} :${data.messages[Math.floor(Math.random()*data.messages.length)].message}\r\n`
  const user = data.account

  const commands = [
    `PASS ${user.token}`,
    `NICK ${user.name}`,
    `JOIN #${data.channel}`,
    'CAP REQ :twitch.tv/tags', 
    'CAP REQ :twitch.tv/commands',
    'CAP REQ :twitch.tv/membership',
  ]

  const SendMsg = () => {
    socket.send(commands.shift() + "\r\n")
    if(commands.length > 0) setTimeout(() => SendMsg(), 100)
    else 
	{
		socket.send(RandMSG());
		if (once) return;
		
		setInterval(() => socket.send(RandMSG()), data.intervalone) 
    }
  }

  const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443")
  socket.onopen = () => { SendMsg() }
}

self.onmessage = (e) => {
  data = e.data
  Start(data.once)
}