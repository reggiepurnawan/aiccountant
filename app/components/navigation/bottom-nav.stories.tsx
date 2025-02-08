import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomNav } from "./bottom-nav";
import { createRemixStub } from "~/test/remix-stub";

const meta = {
  title: "Navigation/BottomNav",
  component: BottomNav,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          Component: () => (
            <div className="relative h-[812px] bg-white">
              <div className="absolute inset-x-0 bottom-0">
                <Story />
              </div>
            </div>
          ),
        },
      ]);
      return <RemixStub />;
    },
  ],
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActiveHome: Story = {
  parameters: {
    reactRouter: {
      location: { pathname: "/" }
    }
  }
};

export const ActiveTransaction: Story = {
  parameters: {
    reactRouter: {
      location: { pathname: "/transactions" }
    }
  }
}; 