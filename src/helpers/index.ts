import crypto from "crypto";

const SECRET = "ADNAN-REST-API";
export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [password, salt].join("/"))
    .update(SECRET)
    .digest("hex");
};
