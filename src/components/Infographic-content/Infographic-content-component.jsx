import "./Infographic-content-styles.scss";

const InfographicContent = ({ state }) => {
  const onSubmitHandler = (e) => {};

  switch (state) {
    case "budgetting":
      return (
        <div className="infographic-content-budgetting">
          <div className="infographic-content-container">
            <h2 className="infographic-content-title">
              Fixed vs Variable Expenses
            </h2>
            <ul className="infographic-content-list">
              <li className="infographic-content-item">
                <span className="infographic-content-key">Budget:</span> A plan
                that outlines what money you expect to earn or receive (your
                income) and how you will save it or spend it (your expenses) for
                a given period of time; also called a spending plan.
              </li>
              <li className="infographic-content-item">
                <span className="infographic-content-key">Fixed expenses:</span>
                Expenses, like bills, that must be paid each month and generally
                cost the same amount. Some fixed expenses, like a utility bill,
                may also be variable because the amount changes each month
                depending on usage.
              </li>

              <li className="infographic-content-item">
                <span className="infographic-content-key">
                  Variable expenses:
                </span>
                Expenses that change in amount from month to month.
              </li>
            </ul>
          </div>
        </div>
      );
    case "interestRates":
      return (
        <div className="infographic-content-interest">
          <div className="infographic-content-container">
            <h2 className="infographic-content-title">Interest Rates</h2>
            <ul className="infographic-content-list">
              <li className="infographic-content-item">
                <span className="infographic-content-key">What?</span> Interest
                is essentially a charge to the borrower for the use of an asset.
                Can be thought of as the "cost of money"
              </li>
              <li className="infographic-content-item">
                <span className="infographic-content-key">
                  Loans and Debts:{" "}
                </span>
                Interest rates for personal loans are not always the lowest
                option. This is especially true for borrowers with poor credit.
                Paying the minimum can often lead to fees and penalties that can
                drive up the cost of borrowing.
              </li>
              <li className="infographic-content-item">
                <span className="infographic-content-key">
                  Compound Interest:{" "}
                </span>
                Compound interest is calculated on the principal amount and the
                accumulated interest of previous periods, and thus can be
                regarded as “interest on interest” that you have. Unfortunately
                compounding can also work against consumers who have loans that
                carry very high-interest rates, such as credit card debt.
              </li>

              <li className="infographic-content-item">
                <span className="infographic-content-key">Inflation: </span>
                Inflation and interest rates tend to move in the same direction
                because interest rates are the primary tool used by the bank to
                manage inflation. Inflation is an increase in the level of
                prices of the goods and services that households buy.
              </li>
            </ul>
          </div>
        </div>
      );
    case "riskManagement":
      return (
        <div className="infographic-content-risk">
          <div className="infographic-content-container">
            <h2 className="infographic-content-title">Risk Management</h2>
            <ul className="infographic-content-list">
              <li className="infographic-content-item">
                <span className="infographic-content-key">
                  Medical Insurance:
                </span>{" "}
                Insurance is key to you being able to focus on the important
                things in life, because it will ensure financial security for
                you and your family should anything unfortunate happen. When
                large financial burdens like hospital bills or medical charges
                arise, insurance helps meet the costs.
              </li>
              <li className="infographic-content-item">
                <span className="infographic-content-key">Life Insurance:</span>
                Buying life insurance protects your dependents from the
                potentially devastating financial losses that could result if
                something happened to you. It provides financial security, helps
                to pay off debts, helps to pay living expenses, and helps to pay
                any medical or final expenses.
              </li>

              <li className="infographic-content-item">
                <span className="infographic-content-key">
                  Emergency Funds:
                </span>
                Emergency Funds are another way of managing risk. Rather than
                paying premiums to a company, you are paying yourself money that
                you can use at a later date. The cash can be accessed quickly
                and easily if some unfortunate event happens to occur.
              </li>
            </ul>
          </div>
        </div>
      );
    case "investing":
      return (
        <div className="infographic-content-investing">
          <div className="infographic-content-container">
            <h2 className="infographic-content-title">Investing</h2>
            <ul className="infographic-content-list">
              <li className="infographic-content-item">
                <span className="infographic-content-key">Why? </span>Investing
                involves deploying capital (money) toward projects or activities
                that are expected to generate a positive return over time and
                can be done to counteract the effects of inflation which causes
                an escalation in price of goods.
              </li>
              <li className="infographic-content-item">
                <span className="infographic-content-key">
                  Active Investing:{" "}
                </span>
                Active investing requires a hands-on approach, typically by a
                portfolio manager or other so-called active participant. The
                goal of active money management is to beat the stock markets
                average returns and take full advantage of short-term price
                fluctuations.
              </li>

              <li className="infographic-content-item">
                <span className="infographic-content-key">
                  Passive Investing:{" "}
                </span>
                Passive investors invest for the long haul. Passive investors
                limit the amount of buying and selling within their portfolios,
                making this a very cost-effective way to invest. The strategy
                requires a buy-and-hold mentality.
              </li>

              <li className="infographic-content-item">
                <span className="infographic-content-key">Risk Apetite: </span>
                Risk apetite and Risk Tolerance are sometimes used
                interchangeably. It simply means the degree of risk that an
                investor is willing to endure given the volatility in the value
                of an investment i.e. 30% risk tolerance means a range between
                -30% to +30%.
              </li>
            </ul>
          </div>
        </div>
      );
    case "game":
      return (
        <div className="infographic-content-game">
          <div className="infographic-content-container">
            <h2 className="infographic-content-title">
              Help Frustrated Farah with her Financial Situation!
            </h2>
            <form
              onSubmit={(e) => {
                onSubmitHandler(e);
              }}
              className="infographic-content-form"
            >
              <ol className="infographic-content-list">
                <li className="infographic-content-game-list">
                  <p>
                    While talking to her friends, Farah found out that they have
                    been investing in the stock market and doing quite well.
                    Farah doesn't have any emergency savings and her parents
                    depend on her financially. Should she follow her friends and
                    invest in the stock market?
                  </p>
                  <ul className="infographic-answers">
                    <li className="infographic-content-answers-items">
                      <input name="answerA" type="radio" value="wrong" /> Yes
                    </li>
                    <li className="infographic-content-answers-items">
                      <input name="answerA" type="radio" value="correct" /> No
                    </li>
                  </ul>
                </li>
                <li className="infographic-content-game-list">
                  <p>
                    Farah is getting married in a year but did not have anything
                    saved up yet as she was putting it off. She is thinking of
                    taking a personal loan but already has some credit card
                    loans that she is making minimum payments on. What should
                    she do?
                  </p>
                  <ul className="infographic-content-answers">
                    <li className="infographic-content-answers-items">
                      <input name="answerB" type="radio" value="wrong" /> Delay
                      the wedding so that she can save up enough.
                    </li>
                    <li className="infographic-content-answers-items">
                      <input name="answerB" type="radio" value="correct" /> Have
                      a smaller wedding so that she is better able to finance
                      it.
                    </li>
                    <li className="infographic-content-answers-items">
                      <input name="answerB" type="radio" value="wrong" /> Take a
                      personal loan as weddings are once in a lifetime
                      opportunities.
                    </li>
                    <li className="infographic-content-answers-items">
                      <input name="answerB" type="radio" value="wrong" /> It
                      depends.
                    </li>
                  </ul>
                </li>
              </ol>

              <button type="submit" className="button-main">
                Submit Answers
              </button>
            </form>
          </div>
        </div>
      );
    default:
      return (
        <div className="infographic-content-introduction">
          <div className="infographic-content-container">
            <h2 className="infographic-content-title">Introduction</h2>
            <ul className="infographic-content-list">
              <li className="infographic-content-item">
                <span className="infographic-content-key">How: </span> You can
                interact with the infographic by clicking on the 4 headers on
                the left-handside to read up on the big impact financial
                concepts and how they relate to each other. Once that is done,
                you can put your knowledge to the test by helping Frustrated
                Farah with her finances and click on the "Play" button below.
              </li>
              <li className="infographic-content-item">
                <span className="infographic-content-key">What: </span>
                Due to the limited time constraints building for the hackathon,
                this infographic is meant to be a proof of concept, therefore
                the content has been taken directly from the links as attributed
                below. Moving forward, the content will be updated and improved
                on.
              </li>
            </ul>
            <div className="content-attribution-container">
              <h3>Content Taken From</h3>
              <ol>
                <li>
                  <a href="https://files.consumerfinance.gov/f/documents/cfpb_building_block_activities_differentiating-fixed-variable-expenses_guide.pdf">
                    Budgeting
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/articles/investing/020614/learn-simple-and-compound-interest.asp">
                    Interest Rates
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/financial-edge/0812/why-an-emergency-fund-is-important.aspx">
                    Emergency Funds
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/ask/answers/12/inflation-interest-rate-relationship.asp">
                    Inflation
                  </a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/terms/c/compoundinterest.asp#:~:text=Compound%20interest%20is%20calculated%20by,subtracted%20from%20the%20resulting%20value.">
                    Compound Interest
                  </a>
                </li>
                <li>
                  <a href="https://www.greateasternlife.com/my/en/personal-insurance/understand-insurance/why-insurance.html">
                    Why buy Insurance
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      );
  }
};

export default InfographicContent;
