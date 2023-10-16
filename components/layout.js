import NextHead from 'next/head';

export default function Layout({
  children,
  title = 'New Tab',
  description = '',
  url = 'https://chrome.google.com/webstore/detail/readhubtab/lplndfbdjbiofehpnckdkfjobpdbfpma',
  image = 'https://lh3.googleusercontent.com/SkFq_GgqYK1TuK3Ktt-tplDPFkG58oapsBABn8pssnINiWIYPv4UCOMjiPIjQ97U5zYm7TlOcPOaA4-61eYpduYKrA=w640-h400-e365-rj-sc0x00ffffff',
}) {
  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/icon48.png" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="referrer" content="no-referrer" />
      </NextHead>

      <div className="container">{children}</div>
    </>
  );
}
