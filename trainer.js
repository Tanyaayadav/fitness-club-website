const trainers = [
  { name: "John Doe", expertise: "Strength Training", img: "/trainer1.jpg" },
  { name: "Sarah Smith", expertise: "Yoga Instructor", img: "/trainer2.jpg" },
];

const Trainers = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Meet Our Trainers</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {trainers.map((trainer, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
            <img src={trainer.img} alt={trainer.name} className="w-full h-40 object-cover rounded-md"/>
            <h3 className="text-xl font-bold mt-2">{trainer.name}</h3>
            <p>{trainer.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
