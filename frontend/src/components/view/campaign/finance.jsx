//Styles for this file is in viewCampaign.scss

import ProgressBar from '../../progressbar/progressbar'

function Finance({raisedPercentage, remainingDays, donationGoal, raisedAmount}){
  return (
    // <div className='finance'>
    <>
        <div className="info">
            <div className="left">
              <span className="raisedPercentage">{raisedPercentage}%</span>
              <span className="dot"></span>
              <span className="remainingDays">{remainingDays} Days left</span>
            </div>
            <div className="right">
              <div className="goal">
                ${donationGoal} Goal
              </div>
            </div>
          </div>
          <ProgressBar 
            progress={raisedPercentage}
            barColor={"white"}
            txtColor={"black"}
            progressColor={"secondary"}
            barHeight={24}
            text={`$${raisedAmount} raised of $${donationGoal}`}
          />
    </>
    // </div>
  )
}

export default Finance