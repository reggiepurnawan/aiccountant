import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavMenuItem } from "./nav-menu-item";
import { 
  House, 
  Receipt, 
  ChartPie, 
  Wallet 
} from "@phosphor-icons/react";
import { createRemixStub } from "~/test/remix-stub";

const meta = {
  title: "Navigation/NavMenuItem",
  component: NavMenuItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    Icon: {
      options: ['House', 'Receipt', 'ChartPie', 'Wallet'],
      mapping: {
        House: House,
        Receipt: Receipt,
        ChartPie: ChartPie,
        Wallet: Wallet,
      },
      control: { 
        type: 'select',
        labels: {
          House: 'Home',
          Receipt: 'Transaction',
          ChartPie: 'Categories',
          Wallet: 'Accounts'
        }
      }
    },
    label: {
      control: 'text'
    },
    to: {
      control: 'text'
    }
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "*",
          Component: () => <Story />
        },
      ]);
      return (
        <div className="p-4 bg-white">
          <RemixStub />
        </div>
      );
    },
  ],
} satisfies Meta<typeof NavMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  args: {
    to: "/",
    label: "Home",
    isActive: false,
    Icon: House,
  },
};

export const Active: Story = {
  args: {
    to: "/",
    label: "Home",
    isActive: true,
    Icon: House,
  },
}; 