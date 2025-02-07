import React from 'react';
import { markdownify } from "@lib/utils/textConverter";

const ProcessSteps = ({ steps }) => {
  return (
    <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="feature-card relative rounded-xl bg-white p-5 pb-8 text-center shadow-lg"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-primary px-4 py-2 text-white">
            {index + 1}
          </div>
          <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
          <p className="mt-4 text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;