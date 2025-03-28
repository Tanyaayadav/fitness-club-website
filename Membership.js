const plans = [
  { type: "Basic", price: "$29/month" },
  { type: "Premium", price: "$49/month" },
];

const Membership = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Membership Plans</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {plans.map((plan, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">{plan.type}</h3>
            <p className="text-lg">{plan.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membership;
