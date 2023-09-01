import sofdo_report from "../assets/images/sofdo-report.jpeg"
import { useNavigate } from 'react-router-dom'

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const blogView = (page: string) => {
    navigate(`/blog/${page}`)
  }
  return <div className='blog-card-container'>
    <div className='blog-card'>
      <img src={sofdo_report}/>
      <div style={{width: "100%", padding: "10px 0px"}}>
        <h3> Annual Report 2023 </h3>
      </div>
      <button className='read-more' onClick={() => blogView('annual-report-2023')}> Read More </button>
    </div>
  </div>
};

export default Blog;
