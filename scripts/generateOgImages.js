 
 
import fs from "node:fs/promises";
import sharp from "sharp";
import path from "node:path";

const inputDirectory = "src/images/"; // Change this to your input directory
const outputDirectory = "public/og"; // Change this to your output directory

const width = 1200;
const height = 630;

async function resizeImages(sourceDir, targetDir, width, height) {
  // remove the target directory and recreate it
  await fs.rm(targetDir, { recursive: true }).catch((err) => {
    console.error("Error removing target directory:", err);
  });
  await fs.mkdir(targetDir, { recursive: true }).catch((err) => {
    // Handle potential errors during directory creation
    console.error("Error creating target directory:", err);
  });

  const files = await fs.readdir(sourceDir);
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    try {
      const image = sharp(sourcePath);
      const metadata = await image.metadata();

      // Handle potential aspect ratio issues
      let resizeOptions = { width, height };
      if (metadata.width / metadata.height !== width / height) {
        resizeOptions = {
          fit: "cover", // Maintain aspect ratio while filling the area
          width,
          height,
        };
      }

      await image
        .resize(resizeOptions)
        .toFile(targetPath)
        .catch((err) => {
          console.error("Error resizing image:", err);
        });
      console.log(`Resized "${file}" to "${targetPath}"`);
    } catch (err) {
      console.error("Error processing image:", file, err);
    }
  }
}

// Example usage:

resizeImages(inputDirectory, outputDirectory, width, height)
  .then(() => {
    console.log("All images resized successfully!");
  })
  .catch((err) => {
    console.error("Error resizing images:", err);
  });
