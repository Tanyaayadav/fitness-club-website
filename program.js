const programs = [
  { name: "Yoga", desc: "Improve flexibility & mental peace." },
  { name: "Weight Training", desc: "Build muscle and strength." },
  { name: "Cardio", desc: "Enhance endurance and stamina." },
];

const Programs = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center">Our Programs</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {programs.map((program, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold">{program.name}</h3>
            <p>{program.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
