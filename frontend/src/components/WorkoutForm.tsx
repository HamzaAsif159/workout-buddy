import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
  async function DeleteAllWorkouts() {
    const response = await fetch("http://localhost:4000/workout/", {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch({ type: "DELETE_ALL_WORKOUTS" });
    }
  }
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { dispatch } = useWorkoutContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("http://localhost:4000/workout/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    console.log(json);

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Excersize Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("Title") ? "error" : ""}
        />

        <label>Load (in kg):</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className={emptyFields.includes("Load") ? "error" : ""}
        />

        <label>Number of Reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={emptyFields.includes("Reps") ? "error" : ""}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
      <button className="deleteWorkout" onClick={DeleteAllWorkouts}>
        Delete All Workouts
      </button>
    </>
  );
};

export default WorkoutForm;
