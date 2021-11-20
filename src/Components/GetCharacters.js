const getCharacters = () => {
  let baseUrl = "https://yosida.com/images/kana/";
  let fileExt = ".gif";
  let allRomaji = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "ka",
    "ki",
    "ku",
    "ke",
    "ko",
    "sa",
    "shi",
    "su",
    "se",
    "so",
    "ta",
    "chi",
    "tsu",
    "te",
    "to",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "ha",
    "hi",
    "fu",
    "he",
    "ho",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "ya",
    "yu",
    "yo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "wa",
    "wo",
    "n",
  ];
  let currentId = 1;
  let characters = [];
  for (let currentRomaji of allRomaji) {
    let character = {};
    character["romaji"] = currentRomaji;
    character["id"] = currentId;
    character["animation"] = baseUrl + currentRomaji + fileExt;
    characters.push(character);
    currentId++;
  }
  return characters;
};

export default getCharacters;
