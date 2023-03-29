import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { mount, VueWrapper } from "@vue/test-utils"
import { BaseButton } from "@/components"

describe("BaseButton unit test", () => {
  let wrapper: VueWrapper | null = null

  beforeEach(() => {
    wrapper = mount(BaseButton)
    wrapper.setProps({
      label: "Test",
      disabled: false,
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
    expect(wrapper.props("disabled")).toBe(false)
    expect(wrapper.props("action")).toBeInstanceOf(Function)
  })

  it("should emit a click event", async () => {
    if (!wrapper) return
    await wrapper.trigger("click")
    expect(wrapper.emitted("click")).toBeTruthy()
  })
})
