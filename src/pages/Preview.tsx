import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface Props {
  text: string;
}
const Preview: React.FC<Props> = ({ text }) => {
  return <div className='preview-container'>
    <ReactMarkdown
      className="markdown-text"
      remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
      children={text}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={materialLight}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
        },
      }}
    />
  </div>

}


export default Preview;
