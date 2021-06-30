/*********************************************************************************
 *                              Author: Chris Wilson                              *
 *             Repository: https://github.com/cwils021/react-form.git             *
 *                                                                                *
 *                            --- Code Description ---                            *
 *                          Test file for App component                           *
 *********************************************************************************/

import { shallow } from "enzyme";
import App from "../App";

test("App Renders", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.isEmptyRender()).toBeFalsy();
});
