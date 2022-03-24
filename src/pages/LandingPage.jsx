import JobCard from "../components/JobCard"


const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className="intro">
      <p>Digital product designer focus on crafting better experiences for web and native mobile apps. Motivated by business goals and solving real user problems</p>
      </div>
      <div className="jobs">
      <JobCard name={'a'}/>
      <JobCard name={'b'}/>
      <JobCard name={'c'}/>
      <JobCard name={'d'}/>
      <JobCard name={'e'}/>
      <JobCard name={'f'}/>
      <JobCard name={'g'}/>
      <JobCard name={'h'}/>
      <JobCard name={'i'}/>
      <JobCard name={'j'}/>
      <JobCard name={'k'}/>
      <JobCard name={'l'}/>

      </div>
    </div>
  )
}

export default LandingPage