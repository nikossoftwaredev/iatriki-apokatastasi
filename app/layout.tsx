import AppointmentForm from 'ui/AppointmentForm';
import Footer from 'ui/Footer';
import Header from 'ui/Header';

import './globals.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <AppointmentForm />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
