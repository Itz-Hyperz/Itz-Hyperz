// Made by Hyperz#0001
async function randomize(doing, langs, tools) {
  let random1 = doing[Math.floor(doing.length * Math.random())];
  let random2 = langs[Math.floor(langs.length * Math.random())];
  let random3 = tools[Math.floor(tools.length * Math.random())];
  return [random1, random2, random3];
}

exports.randomize = randomize
