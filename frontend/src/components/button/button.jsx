import './button.scss'

function LinkButton({text, type, href, size}){
  return (
    <a 
    className={`'.LinkButton' ${type} ${size}`} 
    href={href}>
        
    {/*button content*/} {text}
    </a>
  )
}

export default LinkButton