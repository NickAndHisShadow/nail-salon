import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">
            &copy; 2023 Beauty Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
