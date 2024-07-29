import './businessDescription.scss'
import TeamMember from './teamMember'

function BusinessDescription(){

    let cnt = 0;

  return (
    <div className='businessDescription'>
        <div className="overview" id='overview' >
            <h2>Business Overview</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil laboriosam maiores, optio atque culpa beatae, corporis suscipit, saepe modi debitis tempora natus dolores vel dicta dolore soluta hic accusamus porro maxime delectus cumque quisquam quae? Delectus magnam molestias vitae cum distinctio velit perspiciatis maiores. Suscipit cumque dolor tempore vitae laudantium pariatur doloribus ratione hic perspiciatis voluptas fugiat, maiores eos, totam deserunt veniam mollitia omnis perferendis fuga cum quisquam! Voluptatum, a dolor corrupti aut aperiam vel. Reprehenderit minus, totam quasi in illum nesciunt voluptatem quas, odit vero sequi quae quo cupiditate voluptas laborum eos nobis blanditiis cum cumque modi atque doloremque.
        </div>
        <div className="companyProfile" id='team'>
            <h2>Team Members</h2>
            <div className="teamMembers">
                <TeamMember
                    name={"Akif Shaharier"}
                    designation={"CEO"}
                    profilePicSrc={"./images/akib.png"}
                    count={cnt++}
                />
                <TeamMember
                    name={"Akibur Rahman"}
                    designation={"CEO"}
                    profilePicSrc={"./images/akib.png"}
                    count={cnt++}
                />
                <TeamMember
                    name={"Akram Sarkar"}
                    designation={"CEO"}
                    profilePicSrc={"./images/akib.png"}
                    count={cnt++}
                    keyPerson={1}
                />
                <TeamMember
                    name={"Akibur Rahman"}
                    designation={"CEO"}
                    profilePicSrc={"./images/akib.png"}
                    count={cnt++}
                />
                <TeamMember
                    name={"Akibur Rahman"}
                    designation={"CEO"}
                    profilePicSrc={"./images/akib.png"}
                    count={cnt++}
                />
                <TeamMember
                    name={"Akibur Rahman"}
                    designation={"CEO"}
                    profilePicSrc={"./images/akib.png"}
                    count={cnt++}
                />
            </div>
            
        </div>
        <div className="serviceDetails" id='serviceDetails'>
            <h2>Service Details</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis reiciendis autem odio nostrum. Provident dignissimos quibusdam laudantium nisi voluptas repellat aut! Perferendis, delectus recusandae? Quod assumenda accusantium laudantium odio!</p>
        </div>

        <div className="opportunity" id='opportunity'>
            <h2>Opportunity</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel qui cum soluta impedit ea maiores incidunt dolore vero voluptatibus a, mollitia optio unde minima quos culpa animi fugiat ut veniam, pariatur corrupti tempore neque reprehenderit doloremque quis! Dignissimos blanditiis repellat, tempora officia excepturi sit harum eum molestias recusandae adipisci tenetur laudantium mollitia ex quidem! Optio adipisci veniam porro obcaecati reiciendis. Facilis minima dolor molestias totam earum nihil officiis, ex, debitis impedit commodi laborum, temporibus fugiat quae. Exercitationem, debitis. Aliquam eaque maiores libero porro, quas explicabo reiciendis perspiciatis, a quisquam nam quaerat deserunt ut illum quia incidunt itaque nemo dolore! Deserunt praesentium expedita aperiam illum ea molestiae. Saepe expedita non animi illum impedit totam dolore, inventore quasi et rem, quod cupiditate quisquam quo? Harum sed animi impedit quam perferendis facilis sequi quidem possimus, quod eaque velit illum facere incidunt molestias minus voluptates! Voluptatem, in distinctio eligendi provident eaque vitae praesentium incidunt suscipit a ipsam aspernatur dolores magni maxime expedita reiciendis. Ab doloribus, dolorem autem corrupti temporibus reprehenderit maiores repudiandae, veniam maxime dolores iure a. Sed tempora, veniam nam ut mollitia perferendis inventore cumque quaerat omnis quae necessitatibus iste odit reprehenderit voluptas velit, rem maiores quo, praesentium libero! Consequatur aut facilis est.</p>
        </div>

        
    </div>
  )
}

export default BusinessDescription