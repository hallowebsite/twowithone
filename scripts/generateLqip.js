import fs from "node:fs/promises";
import path from "node:path";
import lqip from "lqip-modern";

const inputDirectory = "src/images/"; // Change this to your input directory
const outputJsonPath = "src/images.json"; // Replace with your desired output JSON file path

const output = {};

const files = await fs.readdir(inputDirectory);
 
async function processFiles() {
  for (const fileName of files) {
    try {
      const filePath = path.join(inputDirectory, fileName);
      const result = await lqip(filePath);
      output[fileName.split(".")[0]] = result.metadata.dataURIBase64;
    } catch (error) {
      console.error("Error processing file:", fileName, error);
    }
  }
  console.log(output);
  await fs.writeFile(outputJsonPath, JSON.stringify(output, null, 2));
}
try {
  await processFiles();
} catch (error) {
  console.error("Error generating lqip", error);
}
