
import AlertMessage from "./alertMessage"

function PaymentFailed(){
    return (
        <AlertMessage
            message={"Payment Failed!"}
            detailsLine1={`The payment attempt was unsuccessful.`}
            detailsLine2={`Please try again later.`}
            iconColor={"red"}
            icon={"line-md:remove"}
            btn1Text={"Go Back"}
            btn1href={"#"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default PaymentFailed