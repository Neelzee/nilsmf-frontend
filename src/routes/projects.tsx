import { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkPrism from "remark-prism";
import "highlight.js/styles/github.css"; // Choose a style that you prefer

export function Projects() {
  const [projects, setProjects] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(ApiRoot("article/projects"))
      .then((res) => {
        setProjects(res.data);
        setIsLoading(false); // Set loading state to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set loading state to false in case of an error
      });
  }, []);

  const renderers = {
    //@ts-ignore
    code: ({ language, value }) => {
      console.log(`Rendering code block with language: ${language}`);
      return (
        <pre>
          <code className={`language-${language}`}>{value}</code>
        </pre>
      );
    },
  };

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
                <Markdown
                  /* @ts-ignore */
                  remarkPlugins={[remarkGfm]}
                  /* @ts-ignore */
                  //components={renderers}
                >
                  {p}
                </Markdown>
              </article>
            );
          })
        )}
      </main>
      <Footer />
    </>
  );
}
