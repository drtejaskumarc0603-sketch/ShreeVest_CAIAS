import { Link } from "react-router-dom";

function hero() {
    return (
        
      <div className="container p-5 mb-5">
        <div className="row text-center">
              <img src='/assets/front.jpeg' alt="Hero" className="front-img"/> 
            <h1 className=" mt-5">Invest In Everything</h1>
            <p>Online Platform to invest in stocks, mutual funds, and more</p>
            <Link to="/signup">
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{width : "20%", margin: "0 auto" , backgroundColor : "rgb(242, 94, 34)"} }>Sign Up Now</button>
            </Link>
        </div>
      </div>
        
    );
}

export default hero;