import { ApiRoot } from "../utils/funcs";

export function RenderImage(props: { src: string; alt: string }) {
  let src = props.src.split("/")[props.src.split("/").length - 1];

  return <img src={ApiRoot(`images/${src}`)} alt={props.alt} />;
}
