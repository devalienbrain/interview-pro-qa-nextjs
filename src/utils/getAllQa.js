export const getAllQa = async () => {
  const res = await fetch("http://localhost:5000/all-qa", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
};
