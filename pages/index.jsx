import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import ProjectLinks from "../components/ProjectLinks";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <SocialLinks />
      <ProjectLinks />
    </div>
  );
}
