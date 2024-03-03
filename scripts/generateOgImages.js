import Jimp from "jimp";
import fs from "node:fs";
import path from "node:path";

const inputDirectory = "src/images/"; // Change this to your input directory
const outputDirectory = "public/og"; // Change this to your output directory
const desiredWidth = 1200; // Change this to your desired width
const desiredHeight = 630; // Change this to your desired height

fs.readdir(inputDirectory, (err, files) => {
  if (err != null) {
    console.error("Error reading input directory:", err);
    return;
  }
  // clear output path
  fs.rmSync(outputDirectory, { recursive: true, force: true });

  files.forEach((file) => {
    if (path.extname(file) === ".jpg") {
      const inputPath = path.join(inputDirectory, file);
      const outputPath = path.join(
        outputDirectory,
        path.basename(file, ".jpg") + ".png",
      );

      Jimp.read(inputPath)
        .then((image) => {
          return image.resize(desiredWidth, desiredHeight);
        })
        .then((resizedImage) => {
          return resizedImage.write(outputPath);
        })
        .then(() => {
          console.log(`${file} converted to PNG and saved to ${outputPath}`);
        })
        .catch((err) => {
          console.error("Error converting file:", err);
        });
    }
  });
});
