'use client';

import AppHeader from '@/layout/AppHeader';
import AppFooter from '@/layout/AppFooter';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { antdConfigGen, styledComponentTheme } from '@/theme/config';
import { ThemeProvider } from 'styled-components';
import { StyledAppLayout, StyledBody, StyledContent } from './AppLayout.style';
import { Provider as JotaiProvider } from 'jotai';

type AppLayoutType = { children: React.ReactNode };

const AppProvider: React.FC<AppLayoutType> = ({ children }) => {
  return (
    <ConfigProvider theme={antdConfigGen}>
      <ThemeProvider theme={styledComponentTheme}>
        <JotaiProvider>{children}</JotaiProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

const AppLayout: React.FC<AppLayoutType> = ({ children }) => {
  return (
    <AppProvider>
      <html lang="en">
        <AntdRegistry>
          <StyledBody>
            <StyledAppLayout>
              <AppHeader />
              <StyledContent>{children}</StyledContent>
              <AppFooter />
            </StyledAppLayout>
          </StyledBody>
        </AntdRegistry>
      </html>
    </AppProvider>
  );
};

export default AppLayout;
