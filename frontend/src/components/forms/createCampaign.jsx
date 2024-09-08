import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useState } from 'react';
import SubmitButton from '../button/submitButton';
import './createCampaign.scss';
import Faq from './faq';
import './largeForm.scss';

function CreateCampaign(){
    const [formData, setFormData] = useState({
        campaignType: '',
        category: '',
        title: '',
        coverImage: '',
        description: '',
        fundInformation: {
            amount: '',
            deadline: ''
        },
        faqs: {
            question: '',
            answer: ''
        }
      });

      const [faqs, setFAQs] = useState([
        <><Faq/></>
      ]);

      const handleClick = () => {
        setFAQs([...faqs, <><Faq/></>])
      };

      const deleteFAQ = (idx) => {
        setFAQs(prev => {
          return prev.filter((p,i) => i != idx);
        })
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const arrayName = "faqs";

      const handleChangeArray = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [arrayName]: {
            ...formData[arrayName],
            [name]: value
          }
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/api/campaign/create-campaign', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include',
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            alert('Campaign created successfully')
            // Handle success (e.g., save token, redirect to dashboard)
          } else {
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            alert(`Error: ${errorData.message}`);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        }
      };
  return (
    <div className='createCampaign'>
        <form className='largeForm' onSubmit={handleSubmit}>
            <h1 className="heading">Create A Campaign</h1>

            <div className="largeForm__section">
                <h4 className='largeForm__sectionHeading'>Basic</h4>
                <hr className='horizontalLine' />

                <div className="largeForm__section__subsection">
                    <div className="largeForm__field">
                        <label htmlFor="campaignType" className='largeForm__field__heading'>Campaign Type</label>
                        <div className="largeForm__field__content">
                            <div className="largeForm__field__radioButton">
                                <input type="radio" value={"Personal"} name="campaignType" id="personal" onChange={handleChange} />
                                <label htmlFor="personal">Personal</label>
                            </div>
                            <div className="largeForm__field__radioButton">
                                <input type="radio" value={"Organizational"} name="campaignType" id="organizational" onChange={handleChange} />
                                <label htmlFor="organizational">Organizational</label>
                            </div>
                        </div>
                    </div>
                    <div className="largeForm__field">
                        <label htmlFor='category' className='largeForm__field__heading'>Category</label>
                        <select name="category" id="category" className='largeForm__field__dropdown' onChange={handleChange}>
                            <option value="none" selected>Select a Category</option>
                            <option value="Technology">Technology</option>
                            <option value="Science">Science</option>
                            <option value="Charity">Charity</option>
                            <option value="Medical">Medical</option>
                            <option value="Art">Art</option>
                        </select>
                    </div>
                </div>
                <div className="largeForm__field">
                    <label htmlFor="title" className='largeForm__field__heading'>Campaign Title</label>
                    <input type="text" name="title" id="title" className='largeForm__field__content campaignTitle' placeholder='Write Your Campaign Title' onChange={handleChange} />
                </div>
                <div className="largeForm__field">
                    <label htmlFor="coverImage">Cover Image</label>
                    <label className="coverImageContainer">
                        <input type="file" accept='image/*' name="coverImage" id="coverImage" onChange={handleChange} hidden />
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
                    <textarea name="description" id="description" className='textarea' placeholder='Tell about your campaign...' onChange={handleChange} />
                </div>
            </div>

            <div className="largeForm__section">
                <h4 className='largeForm__sectionHeading'>Fund Information</h4>
                <hr className='horizontalLine' />
                <div className="largeForm__section__subsection">
                    <div className="largeForm__field">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" name="amount" id="amount" placeholder='100-400' onChange={handleChange} />
                    </div>
                    <div className="largeForm__field">
                        <label htmlFor="deadline">Deadline</label>
                        <input type="date" name="deadline" id="deadline" onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div className="largeForm__section">
                <h4 className='largeForm__sectionHeading'>Other</h4>
                <hr className='horizontalLine' />
                <div className="largeForm__section__faq">
                    <span className="largeForm__section__faq__sectionHeading">Frequently asked Questions</span>

                    <div className="faqContainer">
                      {
                        faqs.map( (faq, idx) => (
                          <div key={idx} className='faq'>
                            <button type='button' disabled={faqs.length == 1} className="deleteButton" onClick={() => {
                              deleteFAQ(idx)
                            }}>
                              <Icon icon={"charm:cross"} className='icon'/>
                            </button>
                            {faq}
                          </div>
                        ))
                      }

                      <button type='button' className='addMoreButton' onClick={handleClick}>Add More</button>
                    </div>
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