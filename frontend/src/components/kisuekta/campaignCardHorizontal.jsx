import StackedText from '../macro/stackedText'
import StatusBox from '../macro/statusBox'
import './campaignCardHorizontal.scss'

function Kisuekta({href, title, owner, category, isLive, donationGoal, raisedAmount, donorNumber, remainingDays}){
    let status;
    let statusBoxType;
    let icon;
    if(isLive && remainingDays > 0) {
        status = "Ongoing";
        statusBoxType = "secondary";
        icon = "fluent-mdl2:giftbox-open";
    }
    else {
        status = "Finished";
        statusBoxType = "primary";
        icon = "lucide:hand-helping";
    }

    
    if(donationGoal==0) donationGoal = "0";
    if(raisedAmount==0) raisedAmount = "0";
    if(donorNumber==0) donorNumber = "0";
    if(remainingDays==0) remainingDays = "0";

  return (
    <a href={`${href}`} title='Click to see details'>
        <div className='kisuekta'>
        <div className="upper-part">
            <div className="thumbnail">
                <img src="./logo.svg" alt="" />
            </div>
            <div className="details">
                <h3 className='title'>{title}</h3>
                <div className="info">
                <span className="owner"> by <span className="name">{owner}</span></span>
                <span>
                    <StatusBox
                        type={"secondary"}
                        text={category}
                    />
                </span>
                </div>
            </div>
            <div className="status">
                <StatusBox
                    type={statusBoxType}
                    text={status}
                    icon={icon}
                />
            </div>
        </div>
        <hr />
        <div className="lower-part">
            <StackedText
                title={"Goal"}
                amountInMoney={donationGoal}
            />
            <StackedText
                title={"Raised"}
                amountInMoney={raisedAmount}
            />
            <StackedText
                title={"Donors"}
                amountInNumber={donorNumber}
            />
            <StackedText
                title={"Days Remaining"}
                amountInNumber={remainingDays}
            />
        </div>
    </div>
    </a>
  )
}

export default Kisuekta