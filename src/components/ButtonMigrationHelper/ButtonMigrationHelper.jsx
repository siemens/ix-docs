import React, { useState } from 'react';

export default function ButtonMigrationHelper() {
  const [component, setComponent] = useState('ix-button');
  const [variant, setVariant] = useState('undefined');
  const [outline, setOutline] = useState('false');
  const [ghost, setGhost] = useState('false');

  const definedVariantMap = {
    'secondary-false-false': 'subtle-primary',
    'secondary-true-false': 'subtle-secondary',
    'secondary-false-true': 'subtle-tertiary',
    'primary-false-false': 'primary',
    'primary-true-false': 'secondary',
    'primary-false-true': 'tertiary',
    'danger-false-false': 'danger-primary',
    'danger-true-false': 'danger-secondary',
    'danger-false-true': 'danger-tertiary',
  };

  const defaultVariantMap = {
    'ix-button': {
      'false-false': 'primary',
      'true-false': 'secondary',
      'false-true': 'tertiary',
    },
    'ix-dropdown-button': {
      'false-false': 'primary',
      'true-false': 'secondary',
      'false-true': 'tertiary',
    },
    'ix-icon-button': {
      'false-false': 'subtle-primary',
      'true-false': 'subtle-secondary',
      'false-true': 'subtle-tertiary',
    },
    'ix-split-button': {
      'false-false': 'primary',
      'true-false': 'secondary',
      'false-true': 'tertiary',
    },
    'ix-toggle-button': {
      'false-false': 'subtle-primary',
      'true-false': 'subtle-secondary',
      'false-true': 'subtle-tertiary',
    },
    'ix-icon-toggle-button': {
      'false-false': 'subtle-primary',
      'true-false': 'subtle-secondary',
      'false-true': 'subtle-tertiary',
    },
  };

  const getResult = () => {
    const o = outline === 'true';
    const g = ghost === 'true';

    if (variant === 'undefined') {
      const key = `${o}-${g}`;
      const map = defaultVariantMap[component];
      return map?.[key] || 'Unknown combination';
    } else {
      const key = `${variant}-${o}-${g}`;
      return definedVariantMap[key] || 'Unknown combination';
    }
  };

  const selectStyle = {
    height: '2.5rem',
    fontSize: '1rem',
    padding: '0.25rem 0.5rem',
    width: '100%',
  };

  const fieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    minWidth: '150px',
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <p>Enter your current button configuration to see the recommended new variant name.</p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={fieldStyle}>
          <label>Component</label>
          <select style={selectStyle} value={component} onChange={(e) => setComponent(e.target.value)}>
            <option value="ix-button">ix-button</option>
            <option value="ix-dropdown-button">ix-dropdown-button</option>
            <option value="ix-icon-button">ix-icon-button</option>
            <option value="ix-split-button">ix-split-button</option>
            <option value="ix-toggle-button">ix-toggle-button</option>
            <option value="ix-icon-toggle-button">ix-icon-toggle-button</option>
          </select>
        </div>

        <div style={fieldStyle}>
          <label>Variant</label>
          <select style={selectStyle} value={variant} onChange={(e) => setVariant(e.target.value)}>
            <option value="undefined">undefined</option>
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
            <option value="danger">danger</option>
          </select>
        </div>

        <div style={fieldStyle}>
          <label>Outline</label>
          <select style={selectStyle} value={outline} onChange={(e) => setOutline(e.target.value)}>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>

        <div style={fieldStyle}>
          <label>Ghost</label>
          <select style={selectStyle} value={ghost} onChange={(e) => setGhost(e.target.value)}>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>✅ New variant:</strong> <span>{getResult()}</span>
      </div>
    </div>
  );
}