export default function handler(req, res) {
  const activity_data = [
    {
      name: "Breakfast",
      status: "done",
    },
    {
      name: "Snacks",
      status: "pending",
    },
    {
      name: "Lunch",
      status: "canceled",
    },
    {
      name: "Ligth meal",
      status: "done",
    },
    {
      name: "Panner",
      status: "done",
    },
    {
      name: "Gym",
      status: "done",
    },
    {
      name: "Family call",
      status: "pending",
    },
    {
      name: "Studies",
      status: "pending",
    },
    {
      name: "Laundry",
      status: "canceled",
    },
    {
      name: "Sleep",
      status: "done",
    },
  ];
  return res.status(200).json({ error: 0, data: activity_data });
}
