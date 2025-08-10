const featuers = [
  "Expansive oceanfront terrace for outdoor entertaining",
  "Gourmet kitchen with top-of-te-line appliances",
  "Private beach access for morning strolls and sunset views",
  "Master suite with a spa-inspired bathroom and ocean-facing balcony",
  "Private garage and ample storage space",
];

function Features() {
  return (
    <div className="text-grey-60 border-grey-15 flex flex-col gap-5 rounded-lg border p-5">
      <h1 className="text-[20px] text-white">Key Features and Amenities</h1>
      {featuers.map((featuer) => (
        <p
          key={featuer}
          className="border-primary-60 bg-grey-10 border-l-2 p-2.5"
        >
          {featuer}
        </p>
      ))}
    </div>
  );
}

export default Features;
