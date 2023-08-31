import { useEffect, useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

import Navbar from "@/components/Navbar";
import WorkoutDetails from "@/components/WorkoutDetails";
import WorkoutForm from "@/components/WorkoutForm";

export default function Home() {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/workout/");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="workouts">
          {workouts &&
            workouts.map((workout: any) => (
              <WorkoutDetails workout={workout} key={workout._id} />
            ))}
          {workouts <= 0 && (
            <div className="workouts">
              <div className="workouts-head">No workouts?</div>
              <div>Add your workouts here...</div>
            </div>
          )}
        </div>
        <div>
          <WorkoutForm />
        </div>
      </div>
    </>
  );
}
