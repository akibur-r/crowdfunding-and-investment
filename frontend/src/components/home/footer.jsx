import './footer.scss'

function Footer(){
  return (
    <div className='footer' id='footer'>
        <div className="footer__content">
            <div className="logo">
                <img src="./logo.svg" alt="" />
            </div>
            <div className="vertical-line"></div>
            <div className="text">
                <h2>ShopnoChowa - Crowdfunding & Investment Finder</h2>
                <p>A place for crowdfunding and finding investors</p>
            </div>
        </div>
        <div className="footer__bottom-line">
            <div className="elements">
                <a href="#footer">Terms & Conditions</a>
                <a href="#footer">Transaction Policy</a>
            </div>
            <div className="credits">Made with <span className="love">♥</span> by <span className="bold">CSE 27</span></div>
        </div>
    </div>
  )
}

export default Footer