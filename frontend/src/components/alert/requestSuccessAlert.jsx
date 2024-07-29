
import AlertMessage from "./alertMessage"

function RequestSuccessAlert(){
  return (
        <AlertMessage
            message={"Request Sent Successfully"}
            detailsLine1={`Your investment request and details has been sent.`}
            detailsLine2={"Please wait for further response via your email."}
            iconColor={"primary"}
            icon={"icon-park-outline:message-success"}
            btn1Text={"Go Home"}
            btn1href={"#"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default RequestSuccessAlert