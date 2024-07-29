//Styles for this file is in viewCampaign.scss file
import StatusBox from '../../macro/statusBox'
import LinkButton from '../../button/linkButton'

function Overview({thumbnailSrc, category, type, title, ownerProfilePicSrc, ownerName, ownerCampaigns, ownerAddress, target, createdAt}){
  return (
    <>
        <div className="viewCampaign__overview__thumbnail">
            <img src={thumbnailSrc} alt="" />
          </div>
          <div className="viewCampaign__overview__details">
            <div className="type">
              <StatusBox type={"secondary"} text={category}/>
              <StatusBox type={"primary"} text={type}/>
            </div>
            
            <h1 className="title">{title}</h1>
            
            <div className="owner-details">
              <div className="profile-pic">
                <img src={ownerProfilePicSrc} alt="" />
              </div>
              <div className="info">
                <h4 className="name">{ownerName}</h4>
                <div className="history">
                  <span className="campaigns">{ownerCampaigns} Campaigns</span>
                  <span className="bar">|</span>
                  <span className="address">{ownerAddress}</span>
                  </div>
              </div>
            </div>
            
            <div className="campaign-details">
              <div className="goal">
                <span>Target: </span> ${target}
              </div>

              <div className="created-at"><span>Created at: </span> {createdAt}</div>
            </div>
            
            <LinkButton 
              type={"primary"}
              text={"Donate"}
              size={"regular"}
              iconBeforeText={"fluent-mdl2:giftbox-open"}
              href={"#"}
            />
          </div>
    </>
  )
}

export default Overview