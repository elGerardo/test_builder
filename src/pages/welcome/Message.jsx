import Image from "next/image";
import WelcomeImage from "../../../public/welcome.jpeg"
let Message = () => {
    let content = 
        <div className="text-center w-100">
            <Image src={WelcomeImage} className="rounded shadow-lg"/>
        </div>
    return content;
}

export default Message;