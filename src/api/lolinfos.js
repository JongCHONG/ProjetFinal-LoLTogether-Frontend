const api_key = "RGAPI-9e65a537-d151-468b-9442-7a7c75a1c319"

const getLolProfile = async (summoner_name) => {
  const LoL_Response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`, {
  })
  const lolProfile = await LoL_Response.json()

  return lolProfile
}

const getLolStats = async (summoner_id) => {
  const LoL_Response = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner_id}?api_key=${api_key}`, {
  })
  const lolStats = await LoL_Response.json()
  
  return lolStats
}

export {
  getLolProfile,
  getLolStats
}