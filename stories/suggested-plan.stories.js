import { html } from 'lit';
import '../src/suggested-plan.js';

export default {
  title: 'SuggestedPlan',
  component: 'suggested-plan',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <suggested-plan
      style="--suggested-plan-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </suggested-plan>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
