'use client';

import Link from "next/link";

export default function NavBar() {
  const links = [
    "/",
    "/blog",
    "/about",
    "/contact",
  ];

  return (
    <>
      {
        links.map((l, i) => {
          return <NavBarLink link={l} index={i} />
        })
      }
    </>
  );
}

function NavBarLink(props: { link: string, index: number }) {
  const link = props.link;
  const index = props.index;
  return (
    <Link
      key={`${index}`}
      href={link}
      className="bg-gray-500"
    >
      {link}
    </Link>
  );
}
