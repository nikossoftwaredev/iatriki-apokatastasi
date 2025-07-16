import { ReactNode } from "react";

export interface BasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export interface BaseLayoutProps extends BasePageProps {
  children?: ReactNode;
}
