import AppFooter from './AppFooter';
import AppNavigation from './AppNavigation';
import { Layout } from './Layout';

export function Page({ global, children, currentPage }) {
  return (
    <Layout global={global} currentPage={currentPage}>
      <div className="flex flex-col h-screen">
        <AppNavigation />
        <main className="flex-grow">{children}</main>
        <AppFooter />
      </div>
    </Layout>
  );
}
