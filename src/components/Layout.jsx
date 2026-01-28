import Navbar from "./Navbar.jsx";
import WhatsAppImage from "./WhatsAppImage.jsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="container">
        {children}
      </main>

      {/* Botón WhatsApp flotante */}
      <WhatsAppImage
        phoneNumber="5491131384881"
        verticalPosition="bottom"
        horizontalPosition="right"
        offset={30}
        size="60px"
      />
    </>
  );
}

export default Layout;
