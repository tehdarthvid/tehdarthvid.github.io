export default function initDeck(set) {
  var urly = process.env.url_recent_deck;
  fetch(urly)
    .then(res => res.json())
    .then(data => {
      //set([]);
      set(data);
    });
}
