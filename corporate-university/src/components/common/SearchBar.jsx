"use client";

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Button as AntButton } from 'antd';
import { Search, X } from 'lucide-react';

const { Option } = Select;

const SearchBar = memo(({
  searchValue,
  onSearchChange,
  categoryValue,
  onCategoryChange,
  levelValue,
  onLevelChange,
  onReset,
  onSearch,
  categories = [],
  levels = [],
}) => {
  return (
    <div className="bg-white rounded-lg p-3 mb-6 shadow-sm border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
        <div className="flex gap-2 flex-1 w-full lg:w-auto">
          <Input
            placeholder="Cari Kelas"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            onPressEnter={onSearch}
            size="middle"
            className="!h-9 flex-1"
          />
          <AntButton
            type="primary"
            size="middle"
            onClick={onSearch}
            icon={<Search className="h-3.5 w-3.5" />}
            className="!bg-primary hover:!bg-primary/90 !border-0 !h-9 !px-5 !font-semibold !text-sm"
          >
            Cari
          </AntButton>
        </div>

        <div className="flex items-center gap-2 w-full lg:w-auto">
          <label className="text-xs font-medium text-gray-700 whitespace-nowrap">
            Kategori:
          </label>
          <Select
            value={categoryValue}
            onChange={onCategoryChange}
            size="middle"
            className="w-full lg:w-36 [&_.ant-select-selector]:!h-9 [&_.ant-select-selector]:!flex [&_.ant-select-selector]:!items-center [&_.ant-select-selection-item]:!text-sm"
          >
            <Option value="all">Semua</Option>
            {categories.map((cat) => (
              <Option key={cat.value} value={cat.value}>
                {cat.label}
              </Option>
            ))}
          </Select>
        </div>

        <div className="flex items-center gap-2 w-full lg:w-auto">
          <label className="text-xs font-medium text-gray-700 whitespace-nowrap">
            Tingkat:
          </label>
          <Select
            value={levelValue}
            onChange={onLevelChange}
            size="middle"
            className="w-full lg:w-36 [&_.ant-select-selector]:!h-9 [&_.ant-select-selector]:!flex [&_.ant-select-selector]:!items-center [&_.ant-select-selection-item]:!text-sm"
          >
            <Option value="all">Semua</Option>
            {levels.map((level) => (
              <Option key={level.value} value={level.value}>
                {level.label}
              </Option>
            ))}
          </Select>
        </div>

        <AntButton
          size="middle"
          danger
          onClick={onReset}
          icon={<X className="h-3.5 w-3.5" />}
          className="!h-9 !px-4 lg:w-auto w-full !font-semibold !text-sm"
        >
          Reset
        </AntButton>
      </div>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  categoryValue: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  levelValue: PropTypes.string.isRequired,
  onLevelChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  levels: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default SearchBar;

