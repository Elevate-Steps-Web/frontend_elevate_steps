import AppFooter from './AppFooter';
import AppNavigation from './AppNavigation';
import { Layout } from './Layout';

export function Page({
  global: {
    attributes: {
      favicon, siteName, nav, footer,
    },
  },
  children,
  currentPage,
}) {
  return (
    <Layout favicon={favicon} siteName={siteName} currentPage={currentPage}>
      <div className="flex flex-col h-screen">
        <AppNavigation nav={nav} />
        <main className="flex-grow">{children}</main>
        <AppFooter footer={footer} />
      </div>
    </Layout>
  );
}
