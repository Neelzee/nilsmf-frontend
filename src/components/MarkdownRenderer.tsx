import axios from "axios";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ApiRoot } from "../utils/funcs";

export function RenderMarkdown(props: { file: string }) {
  const [content, setContent] = useState("# NO DATA FOUND");

  useEffect(() => {
    axios
      .get(ApiRoot(`article/${props.file}`))
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <article>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </article>
  );
}
