import Card from "../../components/base/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import { useState } from "react";
import { server } from "../../config";
import { useDispatch} from 'react-redux'
import { useRouter } from "next/router";

function add() {
  const dispatch = useDispatch();
  const router = useRouter();

  // loading & alert functions
  const isLoading = (isLoad) => dispatch({type: 'LOADING', payload: isLoad})
  const alert = (message,status) => dispatch({type: 'ALERT', payload: {message,status}})

  // define form inputs
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    isLoading(true);
    try {
      const resp = await fetch(`${server}/taxonomy`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!resp.ok) {
        alert("Something went wrong",false);
      } else {
        alert("Successfully",true);
        router.push("/taxonomy");
      }
      
    } catch (error) {
      alert(error.message,false);
    }
    isLoading(false);
  };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="form-group w-50 mb-15">
          <TextField
            required
            id="outlined-required"
            label="Name"
            className="w-100"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="form-group w-100 mb-15">
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            minRows={4}
            className="w-100"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group w-100 mb-15">
          <Button type="submit" variant="contained">
            ADD TAXONOMY
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default add;
