
const ApproachesOfDevelopment: React.FC = () => {
  return <div className="approaches-development-container">
    <br/>
    <h1> SoFDO APPROACHES OF DEVELOPMENT </h1>
    <br/>
    <p style={{width: "40rem"}}>SoFDO applies Sustainable Livelihoods approaches that provide a framework for addressing poverty and
vulnerability in both development and humanitarian contexts. They have emerged from the growing
realization of the need to put the poor and all aspects of their lives and means of living at the center of
development and humanitarian work, while maintaining the sustainability of natural resources for present
and future generations.</p>
    <br/>
    <p>Sustainable livelihoods objectives aim to increase the sustainability of poor people’s livelihoods through
promoting: </p>
    <div className='lists'>
      <div>
        <input type="checkbox" checked={true}/>
        <label>Improved access to high-quality education, information, technologies and training and better nutrition and health</label>
      </div>
      <div>
        <input type="checkbox" checked={true}/>
        <label>A more supportive and cohesive social environment</label>
      </div>
      <div>
        <input type="checkbox" checked={true}/>
        <label>Better access to basic and facilitating infrastructure</label>
      </div>
      <div>
        <input type="checkbox" checked={true}/>
        <label>More secure access to, and better management of, natural resources</label>
      </div>
      <div>
        <input type="checkbox" checked={true}/>
        <label>More secure access to financial resources; a policy and institutional environment that supports
multiple livelihood strategies and promotes equitable access to competitive markets for all</label>
      </div>
    </div>
  </div>
}

export default ApproachesOfDevelopment;
