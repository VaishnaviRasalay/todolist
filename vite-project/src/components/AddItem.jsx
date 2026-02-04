const AddItem = ({ value, onChange, onAdd, isEdit }) => {
  return (
    <div className="add-box">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={onAdd}>
        {isEdit ? "Save" : "Add"}
      </button>
    </div>
  );
};

export default AddItem;
