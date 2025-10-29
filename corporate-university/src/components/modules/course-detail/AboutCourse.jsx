import React from 'react';
import PropTypes from 'prop-types';

const AboutCourse = ({ about }) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Tentang Kelas Ini
      </h2>
      <div className="space-y-4">
        {about.map((paragraph, index) => (
          <p key={index} className="text-gray-700 text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

AboutCourse.propTypes = {
  about: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutCourse;

