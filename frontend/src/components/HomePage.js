const HomePage = () => {
    return (
<div className="card text-center">
<div className="card-body">
    <p className="card-text">
      This is Node.js App that displays data from journeys 
      made with City Bikes in Capital area of Finlnad. Backend 
      service fetches and converts .csv data to objects and 
      mongoose saves that data to MongoDB. 
      React.js handles the frontend UI.</p>
     <p className="card-text mb-auto">
          You can download the completed project or
          build the application by following the steps found in Github.
      </p>
      <br></br>
    <a href="https://github.com/makehaapis/HCB-Backend" className="btn btn-primary">Go to GitHub repository.</a>
</div>
</div>
)}

export default HomePage