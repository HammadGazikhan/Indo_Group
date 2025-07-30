import fs from "fs";

const deleteFileIfExists = (filePath) => {
  if (filePath && fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

export default deleteFileIfExists;
