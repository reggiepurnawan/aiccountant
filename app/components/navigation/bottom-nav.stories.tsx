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
  tags: ["autodocs"],
  argTypes: {
    activePath: {
      control: "select",
      options: ["/", "/transactions", "/categories", "/accounts"],
      labels: {
        "/": "Home",
        "/transactions": "Transactions",
        "/categories": "Categories",
        "/accounts": "Accounts"
      }
    }
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "*",
          Component: () => (
            <div className="bg-gray-100 min-h-screen w-full max-w-md mx-auto">
              <div className="absolute bottom-0 left-0 right-0">
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

export const Home: Story = {
  parameters: {
    reactRouter: {
      location: { pathname: "/" }
    }
  }
};

export const Transactions: Story = {
  parameters: {
    reactRouter: {
      location: { pathname: "/transactions" }
    }
  }
};

export const Categories: Story = {
  parameters: {
    reactRouter: {
      location: { pathname: "/categories" }
    }
  }
};

export const Accounts: Story = {
  parameters: {
    reactRouter: {
      location: { pathname: "/accounts" }
    }
  }
}; 