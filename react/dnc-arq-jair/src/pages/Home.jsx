import Button from "@components/Button/Button";
import Banner from "@components/Banner/Banner";
import Hero from "@components/Hero/Hero";
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
      <Hero title="Home" image="about.png" />
      <Footer />
    </>
  );
}

export default Home;
