import Head from 'next/head';
import '../../styles/globals.css';
import BackPanelLayout from '../components/layouts/BackPanelLayout';
import DesignPageLayout from '../components/layouts/designPageLayout';
import WebsitelLayout from '../components/layouts/WebsiteLayout';

function MyApp({
  Component,
  pageProps,
  router,
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
}) {
  const adminPanel = router.route.startsWith('/admin-panel') ? true : false;
  const getLayout = (page) => {
    if (page.type.name == 'DesignPage') {
      return <DesignPageLayout> {page} </DesignPageLayout>;
    }
    if (adminPanel) {
      return <BackPanelLayout> {page} </BackPanelLayout>;
    }

    return <WebsitelLayout> {page} </WebsitelLayout>;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        {/* favicon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  // seo purpose
  const title = 'SP Website Builder';
  const description = 'My website description';
  const keywords = 'keyword 1 keyword 2 keyword 3 keyword 4 keyword 5';
  const canonical = 'http://localhost:5000';
  const ogTitle = 'My Website og title';
  const ogDescription = 'My Website og description';
  const ogUrl = 'http://localhost:5000';

  return {
    pageProps,
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
  };
};

export default MyApp;
