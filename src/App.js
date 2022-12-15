import "./App.css";
import "./global.css";
import Card from "./components/Card";
import Button from "./components/Button";
import Text from "./components/Text";
import ContactCard from "./components/ContactCard";
import { IoIosArrowBack } from "react-icons/io";

function App() {
  return (
    <div className="App position-relative">
      <div className="navbar">
        <IoIosArrowBack className="navbar-icon"></IoIosArrowBack>
        <Text className="font-weight700">Upcoming Appointments</Text>
      </div>
      <Card className="background-blue-gradient">
        <div className="display-flex align-items-center">
          <Text className="color-white font-weight500 margin-right12">
            New Booking in 2 Minutes
          </Text>
          <Button className="font-size-13 font-weight500 background-orange-gradient color-white border-white">
            Book Now
          </Button>
        </div>
      </Card>
      <ContactCard
        imgUrl="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.2.854522360.1671056821"
        infos={[
          <div>
            <Text className="font-size-14">17 september 2021, 9.30 PM</Text>
          </div>,
          <div>
            <Text className="font-size-14 color-orange">
              Appointment with doctor arun
            </Text>
          </div>,
          <div>
            <Text className="font-size-14">Doctor world clinic</Text>
          </div>,
        ]}
      ></ContactCard>
      <ContactCard
        imgUrl="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.2.854522360.1671056821"
        infos={[
          <div>
            <Text className="font-size-14">17 september 2021, 9.30 PM</Text>
          </div>,
          <div>
            <Text className="font-size-14 color-orange">
              Appointment with doctor arun
            </Text>
          </div>,
          <div>
            <Text className="font-size-14">Doctor world clinic</Text>
          </div>,
          <div>
            <Text className="font-size-14 font-weight700">
              Test : X-ray test
            </Text>
          </div>,
        ]}
      ></ContactCard>
      <Button className="w-100 height-50">
        <Text className="text-center">Back</Text>
      </Button>
    </div>
  );
}

export default App;
