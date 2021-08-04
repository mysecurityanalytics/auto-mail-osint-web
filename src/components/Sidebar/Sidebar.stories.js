import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

export default {
  title: "Sidebar/Pages",
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const Login = () => <Sidebar type="login"></Sidebar>;
export const Signup = () => <Sidebar type="register"></Sidebar>;
export const Osint = () => <Sidebar type="osint"></Sidebar>
