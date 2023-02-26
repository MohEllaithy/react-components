import Button from "../components/Button";
import { BsFillBadgeTmFill, BsFillBagCheckFill, BsFillAlarmFill } from "react-icons/bs";


function ButtonsPage(){
    return (
        <div>
            <div>
                <Button secondary outline rounded>
                    <BsFillAlarmFill />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <BsFillBadgeTmFill />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <BsFillBagCheckFill />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <BsFillBagCheckFill />
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <BsFillBagCheckFill />
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default ButtonsPage;