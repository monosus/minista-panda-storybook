---
name: 'component'
root: '.'
output: 'src/components'
ignore:	['.']
questions:
  name: 'Please enter a componentName.'
---


# {{ inputs.name | pascal }}/index.tsx

```typescript
import React from 'react'
import { {{ inputs.name | pascal }} as {{ inputs.name | pascal }}Recipe, type {{ inputs.name | pascal }}Variant } from '@styled-system/recipes'

type {{ inputs.name | pascal }}Props = {{ inputs.name | pascal }}Variant & {
    children: React.ReactNode
  }
export type Props = React.PropsWithChildren<{}>;

const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props) => {
  const { children, ...otherProps } = props
  return (
    <div className={ {{ inputs.name | pascal }}Recipe({ ...otherProps })} >
    {children}
    </div>
  );
};

export default {{ inputs.name | pascal }}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.recipe.ts`

```typescript
import { defineRecipe } from '@pandacss/dev';

export const {{ inputs.name | pascal }}Recipe = defineRecipe({
  className: '{{ inputs.name | kebab }}',
  description: '',
  base: {},
  variants: {
    visual: {},
    size: {},
  },
  defaultVariants: {}
});

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.ts`

```typescript
import type { Meta, StoryObj } from '@storybook/react';

import {{ inputs.name | pascal }} from '~/components/{{ inputs.name | pascal }}';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'This is {{ inputs.name | pascal }}',
  },
};

```