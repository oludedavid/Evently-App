import NavBar from "../navMenu/navigationMenu";
import Footer from "../footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
