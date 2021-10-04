import { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
    children: ReactNode;
}

function Layout(props: LayoutProps) {
    const { children } = props;
    return (
      <div>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </div>
    );
}

export default Layout;
