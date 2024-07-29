import { Icon } from '@iconify-icon/react';
import './dashboard.scss'
import StatsCard from '../../components/cards/statsCard';

function Dashboard(){
  return (
    <div className='dashboard'>
        <div className="info">
            <div className="profile-info">
                <div className="personal">
                    <h3 className='name'>Akram Sarkar</h3>
                    <span className="email">akramsarkar@gmail.com</span>
                </div>
                <div className="donation">
                <Icon icon="fluent-mdl2:giftbox-open" className='icon'/>
                <div className='text'> $<span className='donationAmount'>100 </span> Donated</div>
                </div>
            </div>
            <div className="profile-image">
                <img src="" alt="" />
            </div>
        </div>
        <div className="stats">
            <h1 className="title">Profile Overview</h1>
            <div className="content">
                <StatsCard
                    titleLine1={"Projects"}
                    titleLine2={"Donated"}
                    type={"primary"}
                    amount={8}
                    icon={"healthicons:money-bag"}
                />
                <StatsCard
                    titleLine1={"Total"}
                    titleLine2={"Invested"}
                    type={"secondary"}
                    amount={6}
                    icon={"raphael:dollar"}
                />
                <StatsCard
                    titleLine1={"Campaigns"}
                    titleLine2={"Created"}
                    type={"primary"}
                    amount={10}
                    icon={"material-symbols:campaign"}
                />
                <StatsCard
                    titleLine1={"Businesses"}
                    titleLine2={"Posted"}
                    type={"secondary"}
                    amount={0}
                    icon={"fluent:arrow-trending-sparkle-24-filled"}
                />
            </div>
        </div>
    </div>
  )
}

export default Dashboard