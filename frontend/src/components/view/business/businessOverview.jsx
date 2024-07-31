import './businessOverview.scss' 
import StatusBox from '../../macro/statusBox'
import LinkButton from '../../button/linkButton'

function BusinessOverview({thumbnailSrc, category, title, tagline, ownerProfilePicSrc, ownerName, ownerBusinesss, ownerAddress, foundedAt}){
  return (
    <>
        <div className="viewBusiness__overview__thumbnail">
            <img src={thumbnailSrc} alt="" />
          </div>
          <div className="viewBusiness__overview__details">
            <div className="type">
              <StatusBox type={"secondary"} text={category}/>
            </div>
            
            <div className="title-tagline">
              <h1 className="title">{title}</h1>
              <p className='tagline'>{tagline}</p>
            </div>
            
            <div className="owner-details">
              <div className="profile-pic">
                <img src={ownerProfilePicSrc} alt="" />
              </div>
              <div className="info">
                <h4 className="name">{ownerName}</h4>
                <div className="history">
                  <span className="Businesss">{ownerBusinesss} Businesses</span>
                  <span className="bar">|</span>
                  <span className="address">{ownerAddress}</span>
                  </div>
              </div>
            </div>
            
            <div className="Business-details">
              <div className="founded-at"><span>Founded: </span> {foundedAt}</div>
            </div>
            
            <LinkButton 
              type={"primary"}
              text={"Invest"}
              size={"regular"}
              iconBeforeText={"fluent-mdl2:giftbox-open"}
              href={"#"}
            />
          </div>
    </>
  )
}

export default BusinessOverview