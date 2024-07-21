import './progressbar.scss'

function Progressbar({progress, barColor, progressColor, barHeight, text}){
  return (
    <div className='progressbar'>
        <div className={`bar bc_${barColor} height_px${barHeight}`}>
            <span className={`progress pc_${progressColor}`} >{text}</span>
        </div>
    </div>
  )
}

export default Progressbar