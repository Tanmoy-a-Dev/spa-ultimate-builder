const Protected = ({ data }) => {
  return (
    <div>
      <p>Hello this has some protected data</p>
      {console.log(data)}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/protected');
  const data = await res.json();
  console.log(data);

  return { props: { data } };
}

export default Protected;
