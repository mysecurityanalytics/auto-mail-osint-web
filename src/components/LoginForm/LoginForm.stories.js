import { MemoryRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

export default {
  title: "Form/Login Form",
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const Default = () => <LoginForm></LoginForm>;
