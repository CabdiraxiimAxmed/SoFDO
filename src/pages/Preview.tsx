import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import Footer from '../components/Footer.tsx';
interface Props {
  text: string;
}
const Preview: React.FC<Props> = ({ text }) => {
  return <div className='preview-container'>
    <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
    <Footer/>
  </div>

}


export default Preview;
