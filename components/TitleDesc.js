import React from "react";
import Head from "next/head";

const TitleDesc = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default TitleDesc;