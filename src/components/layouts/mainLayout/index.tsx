import NavBarItems from 'views/NavBarItems';
import Footer from './components/Footer';
import Header from './components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <div className="sticky top-0 z-10">
        <Header />
        <NavBarItems />
      </div>
      {children}
      {/* <Footer /> */}
    </main>
  );
}
