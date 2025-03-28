const schedules = [
  { day: "Monday", class: "Yoga - 7:00 AM" },
  { day: "Tuesday", class: "HIIT - 6:30 PM" },
];

const Schedule = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center">Class Schedule</h2>
      <ul className="mt-4">
        {schedules.map((schedule, index) => (
          <li key={index} className="p-2 bg-gray-200 mt-2 rounded-lg">
            {schedule.day}: {schedule.class}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Schedule;
