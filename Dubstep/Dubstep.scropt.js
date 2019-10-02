function songDecoder(song) {
  let arr = song.split("WUB");
  let temp = [];
  let final = "";
  arr.forEach(element => {
    if (element !== "") {
      temp.push(element);
    }
  });
  final = temp.join(" ");
  return final;
}

songDecoder("AWUBBWUBC");
songDecoder("AWUBWUBWUBBWUBWUBWUBC");
songDecoder("WUBAWUBBWUBCWUB");
