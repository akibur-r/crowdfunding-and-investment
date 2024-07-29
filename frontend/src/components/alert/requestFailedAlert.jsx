
import AlertMessage from "./alertMessage"

function RequestFailedAlert(){
  return (
        <AlertMessage
            message={"Request Failed!"}
            detailsLine1={`There is a problem processing your request.`}
            detailsLine2={"Please try again later."}
            iconColor={"red"}
            icon={"icon-park-outline:message-failed"}
            btn1Text={"Go Home"}
            btn1href={"#"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default RequestFailedAlert