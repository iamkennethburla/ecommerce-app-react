import { Header } from '@ecommerce-app/admin/Features/Layout/Components';

export interface IPageLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

export function PageLayout(props: IPageLayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
