import Head from 'next/head';

interface TitleHtmlProps {
  title: string;
}

export const TitleHtml = ({ title }: TitleHtmlProps) => {
  return (
    <Head>
      <title>{`RBR - ${title}`}</title>
    </Head>
  )
}
