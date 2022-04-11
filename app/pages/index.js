import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import Offer from "../components/Offer/Offer";
import Team from "../components/Team/Team";
import Memberships from "../components/Memberships/Memberships";
import Apply from "../components/Apply/Apply";
import Footer from "../components/Footer/Footer";
import Head from 'next/head'

const Home = () => {
  return (
    <div>
        <Head>
        <title>Trade Club</title>
        <meta
          name="description"
          content="Trade Club is a contemporary co-working space that provides the ultimate edge over the average retail trader."
        />
        <meta
          name="keywords"
          content="trade club, day trading, stock trading, tradelikemike, stocks, retail trading"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Nav />
      <Banner />
      <Offer />
      <Team />
      <Memberships />
      <Apply />
      <Footer />
    </div>
  );
};

export default Home;
