import LinkButton from '../../components/button/linkButton'
import Kisuekta from '../../components/kisuekta/campaignCardHorizontal'
import './campaigns.scss'

function Campaigns(){
  return (
    <div className='dashboard__campaigns'>
        <div className="dashboard__campaigns__heading">
            <h2 className="dashboard__campaigns__heading__title">Campaigns</h2>
            <div className="dashboard__campaigns__heading__button">
                <LinkButton
                    text={"Start a Campaign"}
                    href={"#"}
                    type={"primary"}
                    size={"regular"}
                    iconAfterText={"fluent-mdl2:giftbox-open"}
                />
            </div>
        </div>
        <div className="dashboard__campaigns__filter">
            <div className="dashboard__campaigns__filter__type">
                <h4>Type</h4>
            </div>
            <div className="dashboard__campaigns__filter__status">
                <h4>Status</h4>
            </div>
        </div>
        <hr />
        <div className="dashboard__campaigns__content">
            <Kisuekta
                href={"#"}
                title={"Kill the Hayenas: A Country Saving Project"}
                owner={"Akram Sarkar"}
                category={"Charity"}
                isLive={1}
                donationGoal={100}
                raisedAmount={10}
                donorNumber={20}
                remainingDays={17}
            />
            <Kisuekta
                href={"#"}
                title={"Dhur beda eta ekta tesy"}
                owner={"Akram Sarkar"}
                category={"Charity"}
                isLive={1}
                donationGoal={0}
                raisedAmount={0}
                donorNumber={0}
                remainingDays={0}
            />
            <Kisuekta
                href={"#"}
                title={"Kill the Hayenas: A Country Saving Project"}
                owner={"Akram Sarkar"}
                category={"Charity"}
                isLive={0}
                donationGoal={100}
                raisedAmount={10}
                donorNumber={20}
                remainingDays={17}
            />
            <Kisuekta
                href={"#"}
                title={"Kill the Hayenas: A Country Saving Project"}
                owner={"Akram Sarkar"}
                category={"Charity"}
                isLive={1}
                donationGoal={100}
                raisedAmount={10}
                donorNumber={20}
                remainingDays={17}
            />

            
        </div>
    </div>
  )
}

export default Campaigns