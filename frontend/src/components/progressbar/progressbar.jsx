import './progressbar.scss'

function Progressbar({progress, barColor, progressColor, barHeight, text}){

  if(progress==100) progressColor = 'accent-red';

  return (
    <div className='progressbar'>
        <div className={`bar bc_${barColor} height_px${barHeight}`}>
            <span className={`progress pc_${progressColor}`} style={{width: `${progress}%`}} >
              <span className='text'>{text}</span>
            </span>
            
        </div>
    </div>
  )
}

export default Progressbar