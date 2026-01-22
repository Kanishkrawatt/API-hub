declare module 'redoc' {
  export interface RedocOptions {
    scrollYOffset?: number | string | (() => number);
    hideDownloadButton?: boolean;
    disableSearch?: boolean;
    hideLoading?: boolean;
    nativeScrollbars?: boolean;
    requiredPropsFirst?: boolean;
    sortPropsAlphabetically?: boolean;
    noAutoAuth?: boolean;
    pathInMiddlePanel?: boolean;
    hideHostname?: boolean;
    expandResponses?: string;
    maxDisplayedEnumValues?: number;
    showExtensions?: boolean | string[];
    hideSingleRequestSampleTab?: boolean;
    menuToggle?: boolean;
    jsonSampleExpandLevel?: number | 'all';
    theme?: {
      spacing?: {
        unit?: number;
        sectionHorizontal?: number | ((props: any) => number);
        sectionVertical?: number | ((props: any) => number);
      };
      breakpoints?: {
        small?: string;
        medium?: string;
        large?: string;
      };
      colors?: {
        primary?: {
          main?: string;
        };
        success?: {
          main?: string;
        };
        warning?: {
          main?: string;
        };
        error?: {
          main?: string;
        };
        text?: {
          primary?: string;
          secondary?: string;
        };
        border?: {
          dark?: string;
          light?: string;
        };
        http?: {
          get?: string;
          post?: string;
          put?: string;
          options?: string;
          patch?: string;
          delete?: string;
          basic?: string;
          link?: string;
          head?: string;
        };
      };
      typography?: {
        fontSize?: string;
        lineHeight?: string;
        fontFamily?: string;
        fontWeightRegular?: string;
        fontWeightBold?: string;
        fontWeightLight?: string;
        headings?: {
          fontFamily?: string;
          fontWeight?: string;
        };
        code?: {
          fontSize?: string;
          fontFamily?: string;
          fontWeight?: string;
          color?: string;
          backgroundColor?: string;
          wrap?: boolean;
        };
        links?: {
          color?: string;
          visited?: string;
          hover?: string;
        };
      };
      sidebar?: {
        backgroundColor?: string;
        textColor?: string;
        activeTextColor?: string;
        groupItems?: {
          activeBackgroundColor?: string;
          activeTextColor?: string;
          textTransform?: string;
        };
        level1Items?: {
          activeBackgroundColor?: string;
          activeTextColor?: string;
          textTransform?: string;
        };
        arrow?: {
          size?: string;
          color?: string;
        };
      };
      rightPanel?: {
        backgroundColor?: string;
        textColor?: string;
      };
    };
  }

  export function init(
    spec: any,
    options?: RedocOptions,
    element?: HTMLElement | null,
    callback?: () => void
  ): void;

  export class RedocStandalone extends React.Component<{
    spec?: any;
    specUrl?: string;
    options?: RedocOptions;
  }> {}
}
