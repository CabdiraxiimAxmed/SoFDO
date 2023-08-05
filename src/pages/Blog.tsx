import sofdo_report from "../assets/images/sofdo-report.jpeg"

const Blog: React.FC = () => {
  return <div className='blog-card-container'>
    <div className='blog-card'>
      <img src={sofdo_report}/>
      <div style={{width: "100%", padding: "10px 0px"}}>
        <h3> Annual Report 2023 </h3>
      </div>
      <a className='read-more' href='/blog/annual-report-2023'> Read More </a>
    </div>
  </div>
};

export default Blog;
