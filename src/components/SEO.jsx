import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "ElamWebStudio - Professional Web Development & Design Services by Elam AI",
  description = "ElamWebStudio, a sub-brand of Elam AI, offers premium web development, UI/UX design, mobile apps, SEO, and digital marketing services. Transform your business with cutting-edge web solutions.",
  keywords = "ElamWebStudio, Elam AI, web development, website design, UI UX design, mobile app development, SEO services, digital marketing",
  image = "/src/assets/Logo.png",
  url = "https://elamwebstudio.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
