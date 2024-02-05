import profile from "../assets/customer1.jpg"
const Stats = (props) => {
    return (
      <div data-theme = "dim" className=" lg:my-2 sm:my-16 max-sm:my-16 lg:mb-16 p-16 w-full flex justify-center">
        <div className="stats shadow max-sm:shadow-white">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Clients</div>
    <div className="stat-value text-primary">500+</div>
    <div className="stat-desc">10% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Portfolio Views</div>
    <div className="stat-value text-secondary">2k+</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={profile} />
        </div>
      </div>
    </div>
    <div className="stat-value">100%</div>
    <div className="stat-title">Projects done</div>
    <div className="stat-desc text-primary">No pendding projects</div>
  </div>
  
</div>
      </div>
    )
}
export default Stats;