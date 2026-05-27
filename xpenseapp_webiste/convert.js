const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = "./public";

function walk(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else {
      if (/\.(png|jpg|jpeg)$/i.test(fullPath)) {
        const output = fullPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(output)
          .then(() => {
            console.log(`Converted: ${output}`);
          });
      }
    }
  });
}

walk(dir);
