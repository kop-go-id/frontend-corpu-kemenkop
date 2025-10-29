import React from 'react';
import PropTypes from 'prop-types';
import CurriculumItem from '@/components/common/CurriculumItem';

const Curriculum = ({ items }) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Kurikulum
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <CurriculumItem 
            key={index}
            number={index + 1}
            title={item}
          />
        ))}
      </div>
    </section>
  );
};

Curriculum.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Curriculum;

