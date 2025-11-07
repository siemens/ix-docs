import { iconSuccess } from '@siemens/ix-icons/icons';
import { IxIcon, IxSelect, IxSelectItem } from '@siemens/ix-react';
import React, { useState } from 'react';

const DEFAULT_VARIANT_VALUE = 'not set / default';

export default function ButtonMigrationHelper() {
  const [component, setComponent] = useState('ix-button');
  const [variant, setVariant] = useState(DEFAULT_VARIANT_VALUE);
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

    if (variant === DEFAULT_VARIANT_VALUE) {
      const key = `${o}-${g}`;
      const map = defaultVariantMap[component];
      return map?.[key] || '-';
    } else {
      const key = `${variant}-${o}-${g}`;
      return definedVariantMap[key] || '-';
    }
  };

  const fieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    minWidth: '150px',
  };

  return (
    <div
      style={{
        border: 'var(--theme-std-bdr-1)',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      <p>
        Enter your <strong>current button configuration</strong> to see the
        recommended new variant name.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={fieldStyle}>
          <IxSelect
            label="Component"
            value={component}
            onValueChange={(e) => setComponent(e.target.value)}
          >
            <IxSelectItem value="ix-button" label="ix-button"></IxSelectItem>
            <IxSelectItem
              value="ix-dropdown-button"
              label="ix-dropdown-button"
            ></IxSelectItem>
            <IxSelectItem
              value="ix-icon-button"
              label="ix-icon-button"
            ></IxSelectItem>
            <IxSelectItem
              value="ix-split-button"
              label="ix-split-button"
            ></IxSelectItem>
            <IxSelectItem
              value="ix-toggle-button"
              label="ix-toggle-button"
            ></IxSelectItem>
            <IxSelectItem
              value="ix-icon-toggle-button"
              label="ix-icon-toggle-button"
            ></IxSelectItem>
          </IxSelect>
        </div>

        <div style={fieldStyle}>
          <IxSelect
            label="Variant"
            value={variant}
            onValueChange={(e) => setVariant(e.target.value)}
          >
            <IxSelectItem
              value={DEFAULT_VARIANT_VALUE}
              label={DEFAULT_VARIANT_VALUE}
            ></IxSelectItem>
            <IxSelectItem value="primary" label="primary"></IxSelectItem>
            <IxSelectItem value="secondary" label="secondary"></IxSelectItem>
            <IxSelectItem value="danger" label="danger"></IxSelectItem>
          </IxSelect>
        </div>

        <div style={fieldStyle}>
          <IxSelect
            label="Outline"
            value={outline}
            onValueChange={(e) => setOutline(e.target.value)}
          >
            <IxSelectItem value="false" label="false"></IxSelectItem>
            <IxSelectItem value="true" label="true"></IxSelectItem>
          </IxSelect>
        </div>

        <div style={fieldStyle}>
          <IxSelect
            label="Ghost"
            value={ghost}
            onValueChange={(e) => setGhost(e.target.value)}
          >
            <IxSelectItem value="false" label="false"></IxSelectItem>
            <IxSelectItem value="true" label="true"></IxSelectItem>
          </IxSelect>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'normal',
          marginTop: '1rem',
          gap: '0.5rem',
        }}
      >
        ✅<strong>New variant:</strong>
        <span>{getResult()}</span>
      </div>
    </div>
  );
}
