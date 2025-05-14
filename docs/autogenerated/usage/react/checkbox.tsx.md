```tsx
export default () => {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <input className="ix-form-control" type="checkbox" id="checkbox_01" />
        <label className="ix-form-label" htmlFor="checkbox_01">
          Simple checkbox
        </label>
      </div>

      <div>
        <input
          className="ix-form-control"
          type="checkbox"
          id="checkbox_02"
          disabled
        />
        <label className="ix-form-label" htmlFor="checkbox_02">
          Disabled checkbox
        </label>
      </div>
    </>
  );
};
```
