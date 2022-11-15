const getCharacters = () => {
  let baseUrl = "https://yosida.com/images/kana/";
  let baseUrl2 = "https://guidetojapanese.org/audio/"                                   //"https://drmoku.com/content/uploads/2018/06/";
  let fileExt = ".gif";
  let fileExt2 = ".mp3"                                                                           //".mp3?_=29";
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
    character["pronunciation"] = baseUrl2 + currentRomaji + fileExt2;
    characters.push(character);
    currentId++;
  }
  return characters;
};

export default getCharacters;
