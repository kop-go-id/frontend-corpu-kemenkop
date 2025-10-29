import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as AntPagination } from 'antd';

const Pagination = ({
  current,
  total,
  pageSize,
  onChange,
  showSizeChanger = false,
  className = '',
}) => {
  return (
    <div className="flex justify-center">
      <AntPagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={showSizeChanger}
        className={`[&_.ant-pagination-item-active]:!bg-primary [&_.ant-pagination-item-active]:!border-primary [&_.ant-pagination-item-active_a]:!text-white ${className}`}
      />
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  showSizeChanger: PropTypes.bool,
  className: PropTypes.string,
};

export default Pagination;


