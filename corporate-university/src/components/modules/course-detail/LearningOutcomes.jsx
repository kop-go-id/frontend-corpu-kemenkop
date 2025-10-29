import React from 'react';
import PropTypes from 'prop-types';
import ChecklistItem from '@/components/common/ChecklistItem';

const LearningOutcomes = ({ outcomes }) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Apa yang Akan Anda Pelajari
      </h2>
      <div className="space-y-4">
        {outcomes.map((outcome, index) => (
          <ChecklistItem key={index} text={outcome} />
        ))}
      </div>
    </section>
  );
};

LearningOutcomes.propTypes = {
  outcomes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LearningOutcomes;

