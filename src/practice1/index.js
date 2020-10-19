import getURL from "./utils";
import { ADDRESS, PORT, PATH, REGION as region } from "./constant";

const url = getURL(ADDRESS, PORT, PATH);

export { region, url };
