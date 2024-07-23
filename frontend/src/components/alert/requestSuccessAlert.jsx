
import AlertMessage from "./alertMessage"

function RequestSuccessAlert(){
  return (
        <AlertMessage
            message={"Request Sent Successfully"}
            detailsLine1={`Your investment request and details has been sent.`}
            detailsLine2={"Please wait for further response via your email."}
            iconColor={"green"}
            btn1Text={"Go Home"}
            btn1href={"#"}
            icon={"lucide:hand-helping"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default RequestSuccessAlert