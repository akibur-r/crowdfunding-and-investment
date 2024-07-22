import StyledText from '../styledText/styledText'
import './statsBar.scss'

function StatsBar(){
  return (
    <div className='statsBar'>
      <StyledText
        icon={"lucide:hand-helping"}
        title={"100+"}
        subtitle={"Campaigns Funded"}
      />

      <StyledText
        icon={"fluent-mdl2:giftbox-open"}
        title={"$10K+"}
        subtitle={"Donation Raised"}
      />
      
      <StyledText
        icon={"lucide:circle-dollar-sign"}
        title={"20+"}
        subtitle={"Businesses Funded"}
      />
    </div>
  )
}

export default StatsBar