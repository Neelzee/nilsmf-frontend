import { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import React, { Fragment } from "react";
import { Remark } from "react-remark";
import remarkGemoji from "remark-gemoji";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import { RenderImage } from "../components/images";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router";
import "../styles/project.scss";

export function Project() {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const { file } = useParams();

  useEffect(() => {
    axios
      .get(ApiRoot(`project/${file}`))
      .then((res) => {
        setContent(res.data);
        setIsLoading(false); // Set loading state to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set loading state to false in case of an error
      });
  }, []);
  return (
    <>
      <NavBar />
      <main>
        {isLoading ? (
          // Show a loading indicator or message while data is being fetched
          <div>Loading...</div>
        ) : (
          // Render the data when it's available
          <article>
            <Remark
              // @ts-ignore
              remarkPlugins={[remarkGemoji]}
              remarkRehypeOptions={{ allowDangerousHtml: true }}
              // @ts-ignore
              rehypePlugins={[rehypeSlug, rehypeAutoLinkHeadings]}
              rehypeReactOptions={{
                components: {
                  // @ts-ignore
                  code: (props) => {
                    if (props.className === undefined) {
                      return <code>{props.children[0]}</code>;
                    }

                    return (
                      <SyntaxHighlighter
                        language={
                          props.className.split("-")[
                            props.className.split("-").length - 1
                          ]
                        }
                        style={dracula}
                      >
                        {props.children[0]}
                      </SyntaxHighlighter>
                    );
                  },
                  // @ts-ignore
                  img: (props) => {
                    return <RenderImage src={props.src} alt={props.alt} />;
                  },
                },
              }}
            >
              {content}
            </Remark>
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}
