export const getServerSideProps = ({ query }) => {
  return {
    props: { name: query.name },
  };
};

export default function GreetingPage({ name }) {
  return <div>Hello {name}</div>;
}
