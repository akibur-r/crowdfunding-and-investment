
import AlertMessage from "./alertMessage"

function PaymentSuccessful(){
    return (
        <AlertMessage
            message={"Payment Successful!"}
            detailsLine1={`Thank you so much for the donation.`}
            iconColor={"primary"}
            icon={"line-md:check-all"}
            btn1Text={"Share the Campaign"}
            btn1href={"#"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default PaymentSuccessful