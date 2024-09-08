import './faq.scss'

function Faq(){
  return (
    <>
        <label htmlFor="question" className='faqFirstLine'>
            <span className="question">Question</span>
            
        </label>
        <input type="text" name="question" id="question" className='input' />

        <label htmlFor="answer">Answer</label>
        <textarea name="answer" id="answer" className='textarea'></textarea>
    </>
  )
}

export default Faq