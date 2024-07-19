import './progressbar.scss'

function Progressbar({progress}){
  return (
    <div className='progressbar'>
        <div className="bar">
            <span className="progress" ></span>
        </div>
    </div>
  )
}

export default Progressbar