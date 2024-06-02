import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import "../styles/project.scss";
import { Suspense, createSignal, useTransition } from "solid-js";
import { useParams } from "@solidjs/router";
import { RenderMarkdownText } from "../components/MarkdownRenderer";
import FetchMarkDown from "../components/fetchmarkdown";

export function Project() {
  const { file } = useParams();

  return (
    <>
      <NavBar />
      <main>
        <FetchMarkDown path={`project/${file}`} fallback />
      </main>
      <Footer />
    </>
  );
}
