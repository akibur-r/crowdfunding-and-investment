import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import './createCampaign.scss'
import './largeForm.scss'
import SubmitButton from '../button/submitButton';

function CreateCampaign(){
  return (
    <div className='createCampaign'>
        <form className='largeForm'>
            <h1 className="heading">Create A Campaign</h1>

            <div className="largeForm__section">
                <h4 className='largeForm__sectionHeading'>Basic</h4>
                <hr className='horizontalLine' />

                <div className="largeForm__section__subsection">
                    <div className="largeForm__field">
                        <label htmlFor="campaignType" className='largeForm__field__heading'>Campaign Type</label>
                        <div className="largeForm__field__content">
                            <div className="largeForm__field__radioButton">
                                <input type="radio" name="campaignType" id="personal" />
                                <label htmlFor="personal">Personal</label>
                            </div>
                            <div className="largeForm__field__radioButton">
                                <input type="radio" name="campaignType" id="organizational" />
                                <label htmlFor="organizational">Organizational</label>
                            </div>
                        </div>
                    </div>
                    <div className="largeForm__field">
                        <label htmlFor='campaignCategory' className='largeForm__field__heading'>Category</label>
                        <select name="campaignCategory" id="campaignCategory" className='largeForm__field__dropdown'>
                            <option value="none" selected>Select a Category</option>
                            <option value="technology">Technology</option>
                            <option value="science">Science</option>
                            <option value="science">Science</option>
                        </select>
                    </div>
                </div>
                <div className="largeForm__field">
                    <label htmlFor="campaignTitle" className='largeForm__field__heading'>Campaign Title</label>
                    <input type="text" name="campaignTitle" id="campaignTitle" className='largeForm__field__content campaignTitle' placeholder='Write Your Campaign Title' />
                </div>
                <div className="largeForm__field">
                    <label htmlFor="coverImage">Cover Image</label>
                    <label className="coverImageContainer">
                        <input type="file" accept='image/*' name="coverImage" id="coverImage" hidden />
                        <div className="coverImageContainer__beforeUpload">
                            <Icon icon={'icon-park-outline:upload-picture'} className='icon'/>
                            <div className="text">
                                <span className="line-1">Drag and Drop</span>
                                <span className="line-2">your file here, or <span className="bold">browse</span></span>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            <div className="largeForm__section">
                <h4 className='largeForm__sectionHeading'>Description</h4>
                <hr className='horizontalLine' />
                <div className="largeForm__field">
                    <textarea name="campaignDescription" id="campaignDescription" className='textarea' placeholder='Tell about your campaign...' />
                </div>
            </div>

            <div className="largeForm__section">
                <h4 className='largeForm__sectionHeading'>Fund Information</h4>
                <hr className='horizontalLine' />
                <div className="largeForm__section__subsection">
                    <div className="largeForm__field">
                        <label htmlFor="donationAmount">Amount</label>
                        <input type="text" name="donationAmount" id="donationAmount" placeholder='100-400'/>
                    </div>
                    <div className="largeForm__field">
                        <label htmlFor="deadline">Deadline</label>
                        <input type="date" name="deadline" id="deadline" />
                    </div>
                </div>
            </div>

            <div className="largeForm__section">
                <h4 className='largeForm__sectionHeading'>Other</h4>
                <hr className='horizontalLine' />
                <div className="largeForm__section__subsection">
                    <span className="largeForm__section__subsection__heading">Frequently asked Questions</span>
                </div>
            </div>

            <div className="largeForm__submitSection">
                <SubmitButton value={'Publish'}/>
            </div>
        </form>
    </div>
  )
}

export default CreateCampaign