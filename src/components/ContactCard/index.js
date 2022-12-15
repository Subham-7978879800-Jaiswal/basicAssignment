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
        <Button className="font-size-13 background-orange-gradient color-white">
          Clinic
        </Button>
        <Button className="font-size-13 background-orange-gradient color-white">
          Test
        </Button>
        <Button className="font-size-13 padding-8">Surgery</Button>
        <Button className="font-size-13 padding-8">Medicine</Button>
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
        <Button className="font-size-10 background-purple-gradient color-white">
          RESCHEDULE
        </Button>
        <Button className="font-size-10 background-purple-gradient">
          <Text className="color-white font-size-10">CANCEL</Text>
        </Button>

        <Button className="font-size-10 border-grey box-shadow-none background-color-white">
          <AiOutlineEye />
          VIEW
        </Button>
      </div>
    </Card>
  );
};

export default ContactCard;
