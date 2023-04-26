import { JFAHeader } from "./Header";
import { SearchBar } from "./SearchBar";
import { JFAFooter } from "./Footer";
import { AboutCards } from "./Cards";
import Stadio from "./images/StadioBackground.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${Stadio})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.189)",
        backgroundBlendMode: "lighten",
        color: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <JFAHeader />
      <SearchBar />
      <AboutCards image={""} title={""} badges={[]} />
      <JFAFooter links={[]} />
    </div>
  );
}
