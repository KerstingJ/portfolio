/**
 *
 * This kinda works but I don't have enough images to worry about it right now.
 * just going to do them manually
 *
 */

const fs = require("fs");
const fetch = require("node-fetch");

// function to encode file data to base64 encoded string
function getRaw(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return Buffer.from(bitmap).toString("base64");
}

// get name of all files in public/images
// get name of all files in public/svgs, remove from list of imgs
// for files that are left, make a call to the api
// save the result of the api call to the svgs folde with the same name as the original image

const imageNames = fs.readdirSync("./public/images");
const svgNames = fs.readdirSync("./public/svgs");

let converts = new Set();

imageNames.forEach((file) => {
  if (file.split(".")[1] !== "svg") converts.add(file.split(".")[0]);
});
svgNames.forEach((file) => converts.delete(file.split(".")[0]));

converts = Array.from(converts);

let fileName = `./public/images/${converts[0]}.jpg`;
let fileToChange = getRaw(fileName);

console.log(`submitting`);

let data = JSON.stringify({
  apikey: process.env.CONVERTIO_KEY,
  input: "base64",
  file: fileToChange,
  filename: fileName.split("/").pop(),
  outputformat: "svg",
});

let imgId = "";

// TODO set up dotenv package

fetch("http://api.convertio.co/convert", { method: "post", body: data })
  .then((res) => res.json())
  .then((data) => {
    // fetch(`http://api.convertio.co/convert/${data.id}/dl`).then((res) => {
    //   console.log(`receiving`);
    //   new Promise((resolve, reject) => {
    //     const dest = fs.createWriteStream(`./public/svgs/${converts[0]}.svg`);
    //     res.body.pipe(dest);
    //     res.body.on("end", () => resolve("it worked"));
    //     dest.on("error", reject);
    //   });
    // });
  });
