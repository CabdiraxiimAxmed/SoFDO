import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
interface Props {
  text: string;
}
const Preview: React.FC<Props> = ({ text }) => {
  return <div className='preview-container'>
    <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
  </div>

}


export default Preview;
