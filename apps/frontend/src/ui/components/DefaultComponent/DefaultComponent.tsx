import React, { ReactNode } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

interface DefaultComponentProps {
  children?: ReactNode;
}

const DefaultComponent: React.FC<DefaultComponentProps> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default DefaultComponent;
