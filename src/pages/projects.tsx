import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import { Suspense, createSignal, useTransition } from "solid-js";
import FetchMarkDown from "../components/fetchmarkdown";

export function Projects() {
  const [projects, setProjects] = createSignal<string[][]>([]);
  const [pending, start] = useTransition();

  start(() => {
    axios
      .get(ApiRoot("projects/all"))
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <NavBar />
      <main>
        <article classList={{ pending: pending() }}>
          <Suspense fallback={<div>Loading...</div>}>
            {
              projects().map((p: string[]) => {
                return <FetchMarkDown path={p[1]} fallback />;
              })
            }
          </Suspense>
        </article>
      </main>
      <Footer />
    </>
  );
}

