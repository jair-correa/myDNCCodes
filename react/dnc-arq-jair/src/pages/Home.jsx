import Button from "@components/Button/Button";
import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <p>Subtitle</p>
      <Button buttonStyle="primary" arrow>
        Olá!
      </Button>
      <Banner title="Seja bem-vindo!" />
      <Footer />
    </>
  );
}

export default Home;
