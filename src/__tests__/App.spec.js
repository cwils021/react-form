import { shallow } from "enzyme";
import App from "../App";

test("App Renders", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.isEmptyRender()).toBeFalsy();
});
