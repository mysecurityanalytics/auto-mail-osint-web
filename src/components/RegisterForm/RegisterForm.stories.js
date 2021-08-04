import { MemoryRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default {
  title: "Form/Register Form",
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const Default = () => <RegisterForm></RegisterForm>;
