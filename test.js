const axios = require("axios");

let erro = 0;

async function fetch() {
  const { data } = await axios.get("http://localhost:3000");

  console.log(data.token, " erro ", erro);
}

function init() {
  setInterval(async () => {
    try {
      await fetch();
    } catch (err) {
      erro += 1;
    }
  }, 1);
}

init();
