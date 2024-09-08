import './progressbar.scss';

function Progressbar({progress, barColor, progressColor, barHeight, text, txtColor}){

  if(progress==100) progressColor = 'accent-red';

  return (
    <div className='progressbar'>
        <div className={`bar bc_${barColor} height_px${barHeight} txt_${txtColor}`}>
            <span className={`progress pc_${progressColor}`} style={{width: `${progress}%`}} >
            </span>
              <span className='text'>{text}</span>
            
        </div>
    </div>
  )
}

export default Progressbar