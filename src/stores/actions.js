import json_data from "./cache.json";

export default function initDeck(set) {
  set(json_data);
  /*
  var urly = process.env.url_recent_deck;
  fetch(urly)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(json_data);
      set(data);
    });
    */
}
