import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/bootstrap-select.css" />
  <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
  <link
    rel="stylesheet"
    href="css/flexslider.css"
    type="text/css"
    media="screen"
  />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  {/* for-mobile-apps */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta
    name="keywords"
    content="Resale Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola web design"
  />
  {/* //for-mobile-apps */}
  {/*fonts*/}
  <link
    href="//fonts.googleapis.com/css?family=Ubuntu+Condensed"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic"
    rel="stylesheet"
    type="text/css"
  />
  {/*//fonts*/}
  {/* js */}
  {/* js */}
  {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
  <link href="css/jquery.uls.css" rel="stylesheet" />
  <link href="css/jquery.uls.grid.css" rel="stylesheet" />
  <link href="css/jquery.uls.lcd.css" rel="stylesheet" />
  {/* Source */}
</>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
