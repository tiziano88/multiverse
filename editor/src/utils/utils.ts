import { v4 as uuidv4 } from "uuid";

// Generate unique id
export const generateId = () => {
  // return Math.random().toString(36).substr(2, 9);
  return uuidv4().toString();
};
