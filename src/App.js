import "./App.css";
import "./global.css";
import Card from "./components/Card";
import Button from "./components/Button";
import Text from "./components/Text";
import ContactCard from "./components/ContactCard";
import { IoIosArrowBack } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <IoIosArrowBack></IoIosArrowBack>
        <Text className="navbar-header font-weight700">
          Upcoming Appointments
        </Text>
      </div>
      <Card className="background-blue-gradient">
        <div className="display-flex align-items-center">
          <Text className="color-white font-weight700 margin-right16">
            New Booking in 2Minutes
          </Text>
          <Button className="background-orange-gradient color-white border-white">
            Book Now
          </Button>
        </div>
      </Card>
      <ContactCard
        imgUrl="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.2.854522360.1671056821"
        infos={[
          <div>
            <Text>17 september 2021, 9.30 PM</Text>
          </div>,
          <div>
            <Text className="color-orange">Appointment with doctor arun</Text>
          </div>,
          <div>
            <Text>Doctor world clinic</Text>
          </div>,
        ]}
      ></ContactCard>
      <ContactCard
        imgUrl="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.2.854522360.1671056821"
        infos={[
          <div>
            <Text>17 september 2021, 9.30 PM</Text>
          </div>,
          <div>
            <Text className="color-orange">Appointment with doctor arun</Text>
          </div>,
          <div>
            <Text>Doctor world clinic</Text>
          </div>,
          <div>
            <Text className="font-weight700">Test : X-ray test</Text>
          </div>,
        ]}
      ></ContactCard>
      <Button className="height-50">
        <Text className="text-center">Back</Text>
      </Button>
    </div>
  );
}

export default App;
