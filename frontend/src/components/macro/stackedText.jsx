import './stackedText.scss';

function StackedText({title, amountInMoney, amountInNumber, size, bgColor}){
let amount = '0';

if(amountInMoney) amount = '$' + amountInMoney;
if(amountInNumber) amount = amountInNumber;
  return (
    <div className={`stackedText sz_${size} bg_${bgColor}`}>
        <div className={`stackedText__content `}>{amount}</div>
        <div className={`stackedText__title`}>{title}</div>
    </div>
  )
}

export default StackedText