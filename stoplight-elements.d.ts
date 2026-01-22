declare module '@stoplight/elements' {
  import { ComponentType } from 'react';

  export interface APIProps {
    apiDescriptionDocument: string;
    router?: 'hash' | 'memory' | 'history';
    layout?: 'sidebar' | 'stacked';
    hideSchemas?: boolean;
    hideTryIt?: boolean;
    hideExport?: boolean;
    logo?: string;
  }

  export const API: ComponentType<APIProps>;
}

declare module '@stoplight/elements/styles.min.css';
