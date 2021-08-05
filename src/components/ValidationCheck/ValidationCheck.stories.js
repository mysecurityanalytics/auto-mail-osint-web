import { MemoryRouter } from "react-router-dom";
import ValidationCheck from "./ValidationCheck";

export default {
  title: "Form/OSINT Form",
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const Default = () => <ValidationCheck></ValidationCheck>;
