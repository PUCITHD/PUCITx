import { Helmet } from "react-helmet-async";

interface Props {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
}

const SITE = "PUCITx";
const BASE = "https://pucithd.github.io/PUCITx";
const DEFAULT_DESC =
  "PUCITx — Free online learning platform with Computer Vision, Git, Linux courses from PUCIT instructors. Watch embedded video lectures at your own pace.";
const DEFAULT_IMG = `${BASE}/og-image.png`;

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = "/",
  image = DEFAULT_IMG,
  type = "website",
}: Props) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} — Learn Without Limits`;
  const url = `${BASE}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#6c5ce7" />
    </Helmet>
  );
}
