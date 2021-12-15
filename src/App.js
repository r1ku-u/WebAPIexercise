import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <div class="box cta has-background-grey-lighter">
      <p class="has-text-centered">
        <span class="tag is-primary ">！</span> 日本大学文理学部情報科学科 Webプログラミングの演習課題
      </p>
      <p class="has-text-right">5420044/安齋陸</p>
    </div>
  );
}

function Image(props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src={props.src} alt="cute dog!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <Image src={urls} />
  );
}

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onFormSubmit(props);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <center>
            <button type="submit" className="button is-dark">
              New image
            </button>
          </center>
        </div>
      </form>
    </div>
  );
}

function Main1() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages().then((urls) => {
      setUrls(urls);
    });
  }, []);
  function reloadImages() {
    fetchImages().then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
      <div class="features is-mobile">
        <div class="columns">
          <div class="card has-background-grey-lighter m-6">
            <div class="card-image">
              <figure class="image imagresize">
                <Gallery urls={urls} />
              </figure>
            </div>
            <div class="card-content is-half">
              <div class="content is-half">
                <section className="section">
                  <div className="container">
                    <Form onFormSubmit={reloadImages} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Fox images are retrieved from RandomFox</p>
        <p>
          <a href="https://randomfox.ca/?i=80">RandomFox</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main1 />
      <Footer />
    </div>
  );
}

export default App;
