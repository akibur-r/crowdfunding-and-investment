
import AlertMessage from "./alertMessage"

function PaymentSuccessful(){
    return (
        <AlertMessage
            message={"Payment Successful!"}
            detailsLine1={`Thank you so much for the donation.`}
            iconColor={"green"}
            btn1Text={"Share the Campaign"}
            btn1href={"#"}
            icon={"lucide:hand-helping"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default PaymentSuccessful