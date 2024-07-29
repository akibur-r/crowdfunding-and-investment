
import AlertMessage from "./alertMessage"

function PublishedAlert(){
    return (
        <AlertMessage
            message={"Published!"}
            detailsLine1={`Your campaign has been published to the website.`}
            detailsLine2={"Please check your dashboard to see it."}
            iconColor={"primary"}
            icon={"eva:cloud-upload-outline"}
            btn1Text={"Share the Campaign"}
            btn1href={"#"}
            btn2Text={"Take Me Back"}
            btn2href={"#"}
            btnSize={"regular"}
            btnType={"secondary"}
        />
  )
}

export default PublishedAlert