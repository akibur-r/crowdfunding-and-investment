
import AlertMessage from "./alertMessage"

function PaymentFailed(){
    return (
        <AlertMessage
            message={"Payment Failed!"}
            detailsLine1={`The payment attempt was unsuccessful.`}
            detailsLine2={`Please try again later.`}
            iconColor={"red"}
            btn1Text={"Go Back"}
            btn1href={"#"}
            icon={"lucide:hand-helping"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default PaymentFailed