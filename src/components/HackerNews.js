import { Header } from "./Header";
import { Footer } from "./Footer";
import { Stories } from "./Stories";
import "../styles/HackerNews.css";

// Parent component which contains all the child components
const HackerNews = () => {
  return (
    <div className="hacker-news-container">
      <Header />
      <Stories />
      <Footer />
    </div>
  );
};

export default HackerNews;
