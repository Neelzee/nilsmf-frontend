import axios from "axios";
import { ApiRoot } from "../utils/funcs";

export const getArticle = async (file: string) => {
  let content = "";
  await axios
    .get(ApiRoot(`article/${file}`))
    .then((res) => {
      content = res.data;
      console.log(res);
    })
    .catch((err) => console.log(err))
    .finally(() => (content = "# NO FILE FOUND"));

  return content;
};
