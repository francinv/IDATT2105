import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { mount, VueWrapper } from "@vue/test-utils"
import { CalculatorButton } from "@/components"

describe("CalcButton unit test", () => {
  let wrapper: VueWrapper | null = null

  beforeEach(() => {
    wrapper = mount(CalculatorButton)
    wrapper.setProps({
      label: "Test",
      action: () => console.log("Test"),
    })
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  it("should render the component", () => {
    if (!wrapper) return
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe("Test")
    expect(wrapper.props("label")).toBe("Test")
    expect(wrapper.props("action")).toBeInstanceOf(Function)
  })

  it("should emit a click event", async () => {
    if (!wrapper) return
    await wrapper.trigger("click")
    expect(wrapper.emitted("click")).toBeTruthy()
  })
})
