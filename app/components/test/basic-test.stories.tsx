import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const BasicTest = () => {
  return (
    <div style={{ border: '2px solid blue', margin: '20px', padding: '20px' }}>
      <h1>Hello Storybook</h1>
      <p>If you can see this, basic rendering is working!</p>
    </div>
  );
};

const meta = {
  title: 'Test/BasicTest',
  component: BasicTest,
} satisfies Meta<typeof BasicTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 