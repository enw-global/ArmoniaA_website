const Credits = ({ peopleInvolved }: { peopleInvolved: string[] }) => {
  return (
    <>
      <h3 className="font-bold text-lg">Credits:</h3>
      <ul className="flex flex-row flex-wrap gap-2">
        {peopleInvolved.map((person) => (
          <li
            key={person}
            className="bg-neutral-700 px-3 py-1 rounded-full text-sm"
          >
            {person}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Credits;
