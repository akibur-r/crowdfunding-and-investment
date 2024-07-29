import './submitButton.scss'

function SubmitButton({value}){
  return (
    <div className='submitButton'>
        <input type="submit" value={`${value}`} />
    </div>
  )
}

export default SubmitButton