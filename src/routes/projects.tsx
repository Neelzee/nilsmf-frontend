import { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import remarkGfm from "remark-gfm";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import ReactMarkdown from "react-markdown";
import remarkPrism from "remark-prism";
import React, { Fragment } from "react";
import { Remark } from "react-remark";
import remarkGemoji from "remark-gemoji";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import { RenderImage } from "../components/images";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";

export function Projects() {
  const [projects, setProjects] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(ApiRoot("projects/all"))
      .then((res) => {
        setProjects(res.data);
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
          projects.map((p) => {
            return (
              <article>
                <Remark
                  // @ts-ignore
                  remarkPlugins={[remarkGemoji]}
                  remarkRehypeOptions={{ allowDangerousHtml: true }}
                  // @ts-ignore
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
                  {p[1]}
                </Remark>
              </article>
            );
          })
        )}
      </main>
      <Footer />
    </>
  );
}
