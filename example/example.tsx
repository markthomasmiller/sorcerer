import { useState } from "react";

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const Widget = ({ content }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div style={{ display: open ? "flex" : "none" }}>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </div>
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </>
  );
};
