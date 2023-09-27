import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';

const AddProduct = () => {

    const [input, setInput] = useState("");

/*    const onAddHandler = () => {
        dispatch(setTodos(todoArr))
        if (!input) return;
        const todo = {
          id: uuidv4().split("-")[0],
          text: input
        };
        // const newArr = [...todoArr, todo]
        // setTodoArr(newArr)
    
        setTodoArr([...todoArr, todo]);
        setInput("");
      };*/

  return (
    <div><Navbar/>
    AddProduct  
          <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-75"
          value={input}
          placeholder="Add Todo"
          onChange={(e) => setInput(e.target.value)}
        />
          <button
            className="ms-2 btn btn-secondary"
            // onClick={() => onAddHandler()}
          >
            Add
          </button>
      </div>
    {/* <div>

    <div className="fs-2 mb-3">
      {/* {productData ? "Update Product" : "Create Product"} 
      <div className="w-50 m-auto my-4">
        <input
          className="form-control mt-2"
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control mt-2"
          type="text"
          name="description"
          placeholder="description"
          value={values.description}
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control mt-2"
          type="text"
          name="price"
          placeholder="price"
          value={values.price}
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control mt-2"
          type="text"
          name="quantity"
          placeholder="quantity"
          value={values.quantity}
          onChange={(e) => onInputChange(e)}
        />
        <select
          value={values.category}
          name="category"
          className="form-select  my-3"
          onChange={(e) => onInputChange(e)}
        >
          <option value="">None</option>
          {categories.map((cat) => (
            <option value={cat._id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div>
        {productData ? (
          <div className="btn btn-warning" onClick={() => onHandleUpdate()}>
            Update
          </div>
        ) : (
          <div className="btn btn-success" onClick={() => onHandleCreate()}>
            Create
          </div>
        )}
      </div>
    </div>
  </div>*/}
  </div>
  )
}

export default AddProduct