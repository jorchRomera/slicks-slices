import { FaPepperHot, RiPlantFill } from 'react-icons/all';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon: FaPepperHot,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the Topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name }) => ({
      title: name,
    }),
  },
};
