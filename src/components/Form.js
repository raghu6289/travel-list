import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setdescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = { id: Date.now(), description, quantity, packed: false }

    onAddItems(newItem);

    setdescription("")
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Form</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => {
          return <option value={num} key={num}>{num}</option>;
        })}
      </select>
      <input type="text" value={description} required placeholder="item..." onChange={(e) => setdescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Form