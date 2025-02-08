import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MobileLayout } from "./mobile-layout";
import { createRemixStub } from "~/test/remix-stub";

const meta = {
  title: "Layout/MobileLayout",
  component: MobileLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MobileLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrap the story in a RemixStub
export const Default: Story = {
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "*",
          Component: () => (
            <Story 
              args={{
                header: <div className="w-full text-lg font-semibold">Header</div>,
                children: (
                  <div className="space-y-4 py-4">
                    <div className="h-40 rounded-lg bg-muted" />
                    <div className="h-40 rounded-lg bg-muted" />
                    <div className="h-40 rounded-lg bg-muted" />
                  </div>
                ),
              }}
            />
          ),
        },
      ]);
      
      return <RemixStub />;
    },
  ],
};

export const WithoutHeader: Story = {
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "*",
          Component: () => (
            <Story 
              args={{
                children: (
                  <div className="space-y-4 py-4">
                    <div className="h-40 rounded-lg bg-muted" />
                    <div className="h-40 rounded-lg bg-muted" />
                  </div>
                ),
              }}
            />
          ),
        },
      ]);
      
      return <RemixStub />;
    },
  ],
}; 