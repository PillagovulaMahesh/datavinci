import React, { useState } from 'react';
import checkboxData from '../api/data';
import './NestedCheckbox.css';

function NestedCheckbox() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleParentChange = (parentId, children) => {
    const allChecked = children.every(c => checkedItems[c.id]);
    const updated = { ...checkedItems };
    children.forEach(c => {
      updated[c.id] = !allChecked;
    });
    updated[parentId] = !allChecked;
    setCheckedItems(updated);
  };

  const handleChildChange = (childId, parentId, siblings) => {
    const updated = { ...checkedItems, [childId]: !checkedItems[childId] };
    const allChecked = siblings.every(c => updated[c.id]);
    updated[parentId] = allChecked;
    setCheckedItems(updated);
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(checkedItems).every(Boolean);
    const updated = {};
    checkboxData.forEach(cat => {
      updated[cat.id] = !allChecked;
      cat.children.forEach(c => {
        updated[c.id] = !allChecked;
      });
    });
    setCheckedItems(updated);
  };

  return (
    <div className="nested-checkbox">
      <label>
        <input
          type="checkbox"
          checked={Object.values(checkedItems).every(Boolean)}
          onChange={handleSelectAll}
        />
        Select All
      </label>

      {checkboxData.map(cat => (
        <div key={cat.id} className="category">
          <label>
            <input
              type="checkbox"
              checked={checkedItems[cat.id] || false}
              onChange={() => handleParentChange(cat.id, cat.children)}
            />
            {cat.label}
          </label>
          <div className="items">
            {cat.children.map(child => (
              <label key={child.id}>
                <input
                  type="checkbox"
                  checked={checkedItems[child.id] || false}
                  onChange={() => handleChildChange(child.id, cat.id, cat.children)}
                />
                {child.label}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NestedCheckbox;
