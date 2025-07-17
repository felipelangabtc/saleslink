export default function Header() {
  return (
    <header>
      <img
        className="profile-avatar"
        src="https://servidor-estatico-dusky.vercel.app/perfil.png"
        alt="Profile"
      />
      <div className="profile-bio">
        <h1 className="profile-bio-name">Felipe Luan Langa</h1>
        <h2 className="profile-bio-subtitle">Blockchain Engineer</h2>
        <p className="profile-bio-description">
          Bitcoiner | Blockchain Development Specialist | Future Full Stack Java Developer | Web3 & NFT Community Builder | Metaverse Innovator
        </p>
      </div>
    </header>
  );
}
