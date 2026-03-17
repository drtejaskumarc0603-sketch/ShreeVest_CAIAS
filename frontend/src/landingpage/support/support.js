

const Support = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">

            {/* Left */}
            <div className="col-md-6">
              <p className="breadcrumb">Home &gt; Support</p>

              <h1>Welcome to ShreeVest Support</h1>

              <p className="subtitle">
                We help you learn investing with confidence and clarity.
              </p>

              {/* Search */}
              <input
                type="text"
                placeholder="Search your query..."
                className="search-box"
              />

              {/* Tags */}
              <div className="tags">
                <span>Account</span>
                <span>Payments</span>
                <span>Learning</span>
                <span>Portfolio</span>
                <span>Stocks</span>
              </div>
            </div>

            {/* Right */}
           

          </div>
        </div>
      </section>

      {/* TOPICS SECTION */}
      <section className="topics py-5">
        <div className="container">

          <h2 className="text-center mb-5">
            Learn About <span className="highlight">Investing Basics</span>
          </h2>

          <div className="row g-4">

            {/* CARD */}
            {[
              {
                title: "Mutual Funds",
                items: [
                  "What are Mutual Funds?",
                  "SIP vs Lump Sum",
                  "Types of Mutual Funds"
                ]
              },
              {
                title: "Stock Market Basics",
                items: [
                  "What is a Stock?",
                  "How to Buy/Sell Stocks",
                  "Understanding Risk"
                ]
              },
              {
                title: "Nifty & Sensex",
                items: [
                  "What is Nifty 50?",
                  "What is Sensex?",
                  "How Index Works"
                ]
              },
              {
                title: "Portfolio Building",
                items: [
                  "Diversification",
                  "Long-term vs Short-term",
                  "Risk Management"
                ]
              },
              {
                title: "IPO Basics",
                items: [
                  "What is IPO?",
                  "How to Apply IPO",
                  "IPO Risks"
                ]
              },
              {
                title: "Trading Basics",
                items: [
                  "Intraday Trading",
                  "Delivery Trading",
                  "Common Mistakes"
                ]
              }
            ].map((card, index) => (
              <div className="col-md-4" key={index}>
                <div className="topic-card">
                  <h5>{card.title}</h5>
                  <ul>
                    {card.items.map((item, i) => (
                      <li key={i}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Support;