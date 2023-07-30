import { readFileSync, writeFileSync, rmSync, existsSync } from 'fs';
import { join } from 'path';

export const ReadFile = (filePath, fileName) => {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'src', filePath, fileName)));
  } catch (error) {
    return error.message;
  }
};

export const WriteFile = (filePath, fileName, data) => {
  try {
    return writeFileSync(join(process.cwd(), 'src', filePath, fileName), JSON.stringify(data, null, 2));
  } catch (error) {
    return error.message;
  }
};

export const DeleteFile = (filePath, fileName) => {
  try {
    return rmSync(join(process.cwd(), 'src', filePath, fileName));
  } catch (error) {
    return error.message;
  }
};

export const ExistsFile = filePath => {
  try {
    return existsSync(join(process.cwd(), 'src', filePath));
  } catch (error) {
    return error.message;
  }
};
