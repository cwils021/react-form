/*********************************************************************************
 *                              Author: Chris Wilson                              *
 *             Repository: https://github.com/cwils021/react-form.git             *
 *                                                                                *
 *                            --- Code Description ---                            *
 *                    Example tests written for Form Component                    *
 *********************************************************************************/

import { mount, shallow } from "enzyme";
import Form from "../components/Form";
import useForm from "../hooks/useForm";

describe("Test Form Component", () => {
  it("form renders", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it("renders the correct question fields on start", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("#company_name")).toBeTruthy();
    expect(wrapper.find("#role")).toBeTruthy();
    expect(wrapper.find("#industry")).toBeTruthy();
  });
});
