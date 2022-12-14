import Card from "../Card";
import Button from "../Button";
import Text from "../Text";
import { AiOutlineEye } from "react-icons/ai";

import "../../global.css";
import "./contactCard.css";

const ContactCard = ({ imgUrl, infos }) => {
  return (
    <Card className="background-color-grey">
      <div className="button-container">
        <Button className="background-orange-gradient color-white">
          Clinic
        </Button>
        <Button className="background-orange-gradient color-white">Test</Button>
        <Button className="">Surgery</Button>
        <Button className="">Medicine</Button>
      </div>

      <div className="container">
        <div className="image-container border-light-orange">
          <div>
            <img className="image" src={`${imgUrl}`}></img>
          </div>
        </div>

        <div className="info-container">{infos.map((info) => info)}</div>
      </div>

      <div className="button-container">
        <Button className="background-purple-gradient color-white">
          RESCHEDULE
        </Button>
        <Button className="background-purple-gradient">
          <Text className="color-white">CANCEL</Text>
        </Button>

        <Button className="">
          <AiOutlineEye />
          VIEW
        </Button>
      </div>
    </Card>
  );
};

export default ContactCard;
