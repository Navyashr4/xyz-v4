import { IoLogoChrome } from "react-icons/io";

const getInvInfo = (invType) => {
    let content = [];
    switch (invType) {
        case "Bank Fixed Deposit": {
            content = [
                {
                    title : "Definitions",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : ["Lorem ipsum dolor sit amet, consecteon ullamco", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                }
            ]
            break;
        }

        case "Gold": {
            content = [
                {
                    title : "Definitions",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : ["Lorem ipsum dolor sit amet, consecteon ullamco", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                }
            ]
            break;
        }

        case "Real Estate": {
            content = [
                {
                    title : "Definitions",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : ["Lorem ipsum dolor sit amet, consecteon ullamco", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                }
            ]
            break;
        }

        case "Guaranteed Income Plan": {
            content = [
                {
                    title : "Definitions",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : ["Lorem ipsum dolor sit amet, consecteon ullamco", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                }
            ]
            break;
        }

        default : content = [];
    }

    return content;
}

export default getInvInfo;