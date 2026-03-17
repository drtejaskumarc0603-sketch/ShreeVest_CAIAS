function Awards() {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6 p-5">
                    <img src="/assets/invest.jpeg" alt="largestbroker" className="logo-img-p" />
                </div> 
                <div className="col-6 p-5 mt-5">
                    <h1>Stock Broker and Financial Advisor</h1>
                    <p className="mb-5">We Help Teens Build financial Literacy About Investing And Market Trends As suggested by NSE and BSE </p>
                    <div className="row">
                        <div className="col-6">
                             <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                        <li>
                            <p>Commodities Derivatives</p>
                        </li>
                        
                    </ul>
                        </div>
                        <div className="col-6">
                             <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds & Debentures</p>
                        </li>
                        
                    </ul>
                        </div>
                    </div>
                  {/* <img src="/media/Colab Notebooks/pressLogos.png" alt="pressLogos" style={{width: "90%"}}/> */}
                </div>
            </div>
        </div>
    );
}

export default Awards;