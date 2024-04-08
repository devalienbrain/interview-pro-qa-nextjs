import { getAllQa } from "@/utils/getAllQa";

const ShowAllQa = async () => {
  const { data } = await getAllQa();
  // console.log(data[0]);
  const allQas = data;
  return (
    <div>
      <div className="text-left grid grid-cols-1 gap-4">
        {allQas.map((qa) => (
          // collapse with checkbox of daisy
          <div
            key={qa.id}
            className="collapse bg-base-200 rounded-md shadow-md"
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">{qa.q}</div>
            <div className="collapse-content">
              <p>{qa.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllQa;
