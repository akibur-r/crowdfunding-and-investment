import StackedText from '../../macro/stackedText'
import './businessFinance.scss'

function BusinessFinance({postedAt, totalStocks, investors, soldStocks, stockPrice}){

  if(!postedAt) postedAt = "N/A"; //have to configure this variable to remaining days
  if(!totalStocks) totalStocks = "0";
  // if(!investors) investors = "0";
  // if(!soldStocks) soldStocks = "0";
  // if(!stockPrice) stockPrice = "N/A"
  
  return (
    // <div className='finance'>
    <>
        <div className="upper-section">
          <span className="posted">Posted {postedAt} days ago</span>
          <span className="totalStocks">Stocks offerred: {totalStocks}</span>
        </div>
        <div className="lower-section">
          <StackedText
            title={"Investors"}
            amountInNumber={investors}
          />
          <StackedText
            title={"Stocks Sold"}
            amountInNumber={soldStocks}
          />
          <StackedText
            title={"Stock Price"}
            amountInMoney={stockPrice}
          />
        </div>
    </>
    // </div>
  )
}

export default BusinessFinance