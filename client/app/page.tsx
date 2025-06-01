import React from "react";
import { getHomePage } from "./lib/data/loaders";
import { notFound } from "next/navigation";
import Home from "./components/home/home";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

const Page = async () => {
  const data = await loader();
  const blocks = data?.blocks || [];

  console.log("Loaded blocks:", blocks);
  return (
    <div>
      <Home blocks={blocks} />
    </div>
  );
};

export default Page;
