import Head from "next/head";
import { FC } from "react";

interface HeadProps {
  title: string;
  description: string;
}

const AppHead: FC<HeadProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default AppHead;
