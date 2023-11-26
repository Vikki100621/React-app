export function HomePage() {
  return null;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/page/1?search=fish&limit=4',
      permanent: false,
    },
  };
};

export default HomePage;
