const fs = require("fs");

const colors = [
  ["CDF0EA", "F9F9F9", "F6C6EA", "FAF4B7"],
  ["FFE6E6", "F2D1D1", "DAEAF1", "C6DCE4"],
  ["C2DED1", "ECE5C7", "CDC2AE", "354259"],
  ["F4BFBF", "FFD9C0", "FAF0D7", "8CC0DE"],
  ["9ADCFF", "FFF89A", "FFB2A6", "FF8AAE"],
  ["6867AC", "A267AC", "CE7BB0", "FFBCD1"],
  ["FBC6A4", "F4A9A8", "CE97B0", "AFB9C8"],
  ["F39189", "BB8082", "6E7582", "046582"],
  ["143F6B", "F55353", "FEB139", "F6F54D"],
  ["332FD0", "9254C8", "E15FED", "6EDCD9"],
  ["FF00E4", "ED50F1", "FDB9FC", "FFEDED"],
  ["7C83FD", "96BAFF", "7DEDFF", "88FFF7"],
  ["00EAD3", "FFF5B7", "FF449F", "005F99"],
  ["FEFFDE", "DDFFBC", "91C788", "52734D"],
  ["252525", "6930C3", "64DFDF", "80FFDB"],
  ["191919", "2D4263", "C84B31", "ECDBBA"],
  ["FFEDDB", "EDCDBB", "E3B7A0", "BF9270"],
  ["06283D", "1363DF", "47B5FF", "DFF6FF"],
  ["06113C", "FF8C32", "DDDDDD", "EEEEEE"],
  ["2C272E", "753188", "E59934", "9AE66E"],
  ["37E2D5", "590696", "C70A80", "FBCB0A"],
  ["FF5959", "676FA3", "CDDEFF", "EEF2FF"],
  ["0A1931", "185ADB", "FFC947", "EFEFEF"],
  ["3DB2FF", "FFEDDA", "FFB830", "FF2442"],
  ["98DDCA", "D5ECC2", "FFD3B4", "FFAAA7"],
];

fs.writeFileSync("./json/_data.json", JSON.stringify(colors.flat()));

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  for (let j = 0; j < color.length; j++) {
    const json = {
      name: `Oasis Stack #${parseInt(color[j], 16)}`,
      description: `Palette #${i}`,
      edition: i,
      attributes: [
        {
          trait_type: "id",
          value: parseInt(color[j], 16),
        },
        {
          trait_type: "hex",
          value: "#" + color[j],
        },
        {
          trait_type: "palette",
          value: i,
        },
      ],
    };
    fs.writeFileSync(`./json/${parseInt(color[j], 16)}.json`, JSON.stringify(json, null, 2));
  }
}
