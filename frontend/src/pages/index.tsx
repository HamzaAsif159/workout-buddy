import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import WorkoutDetails from "@/components/WorkoutDetails";

export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/workout/");
      const json = await response.json();

      setWorkouts(json);
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
        </div>
      </div>
    </>
  );
}
