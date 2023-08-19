import React from 'react';
import buildConfig from '../../../minista.config';

const { base } = buildConfig;
/**
 * HtmlAppendedLinkのためのProps。
 * @usage  <HtmlAppendedLink href="/example">サンプルリンク</HtmlAppendedLink>
 * @extends {React.AnchorHTMLAttributes<HTMLAnchorElement>}
 *
 * @property {string} href - リンクの指すURL。
 * @property {React.ReactNode} children - リンクの内容。
 * @property {boolean} [shouldAppendHtml=true] - hrefに.htmlを追加するかどうかのフラグ。
 */
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  shouldAppendHtml?: boolean;
  baseDir?: string;
}

/**
 * 条件に基づき、hrefに.htmlを追加するリンクコンポーネント。
 * baseDirプロパティに入力がない場合はminista.configのbaseを付与する。
 *
 * @param {LinkProps} props - リンクのプロパティ。
 * @returns {React.ReactElement} リンク要素。
 */
const HtmlAppendedLink: React.FC<LinkProps> = ({
  href,
  children,
  shouldAppendHtml = true,
  baseDir = base ?? '',
  ...props
}: LinkProps): React.ReactElement => {
  let processedHref = `${baseDir}${href}`;

  // 本番環境で、かつhrefが / で終わっていない場合、.htmlを追加
  if (import.meta.env.PROD && shouldAppendHtml && !href.endsWith('/')) {
    processedHref += '.html';
  }

  return (
    <a href={processedHref} {...props}>
      {children}
    </a>
  );
};

export default HtmlAppendedLink;

/**
 * @usage：
 *
 * ```jsx
 * import React from 'react';
 * import HtmlAppendedLink from './path_to_component';
 *
 * const App = () => (
 *   <div>
 *     <HtmlAppendedLink href="/example">サンプルリンク</HtmlAppendedLink>
 *   </div>
 * );
 *
 * export default App;
 * ```
 */
