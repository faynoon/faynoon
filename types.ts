
export enum HighlightMode {
  NONE = 'NONE',
  QUOTES = 'QUOTES',
  BRACKETS = 'BRACKETS',
}

export enum ExportMode {
  LONG = 'LONG',
  PAGES = 'PAGES',
}

export interface TypesetterConfig {
  fontSize: number;
  lineHeight: number;
  padding: number;
  paragraphSpacing: number;
  showTitle: boolean;
  title: string; // 品牌名/顶栏
  userTitle: string; // 内容大标题
  highlightMode: HighlightMode;
  exportMode: ExportMode;
  fontFamily: string;
}
