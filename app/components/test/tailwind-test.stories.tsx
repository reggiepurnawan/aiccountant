import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const TailwindTest = () => {
  return (
    <div style={{ padding: '1rem', backgroundColor: 'red' }}>
      <h1 style={{ color: 'white', fontSize: '1.5rem' }}>Test</h1>
    </div>
  );
};

const meta = {
  title: 'Test/TailwindTest',
  component: TailwindTest,
} satisfies Meta<typeof TailwindTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 