import './createCampaign.scss'
import './form.scss'
import '../../utility.scss'

function CreateCampaign(){
  return (
    <div className='createCampaign form-container'>
        <h1 className="formTitle">Create Campaign</h1>
        
        <form action="#" className='form'>
            <div className="basic section">
                <h3 className="section-title">Basic</h3>
                <hr />

                <div className="type-category">
                    <div className="type">
                        <h4>Campaign Type</h4>
                        <div className="content">
                            <input type="radio" name="Personal" id="Personal"/>
                            <label htmlFor="Personal">Personal</label>
                            <input type="radio" name="Organizational" id="Organizational" />
                            <label htmlFor="Organizational">Organizational</label>
                        </div>
                    </div>

                    <div className="category">
                        <h4>Campaign Type</h4>
                        <input type="text" name="category" id="category" />
                    </div>
                </div>
            </div>    
        </form>
    </div>
  )
}

export default CreateCampaign