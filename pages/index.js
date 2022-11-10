import Item from '../components/Item';
import BrowseByName from '../components/BrowseByName';
import Layout from '../components/Layout';
import { useSession, getSession, signIn } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

function Home({ items }) {
  const { status, session } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(true);
      }
    };
    securePage();
  }, []);
  return (
    <Layout title="Welcome">
      <div className="Home">
        <div className="flex flex-wrap justify-center">
          {items.map((item) => (
            <div key={item.idDrink} className="w-[300px px-[20px] ">
              <Item data={item} />
            </div>
          ))}
        </div>
        <BrowseByName />
      </div>
    </Layout>
  );
}

export default Home;

export async function getStaticProps(context) {
  const response = await fetch(process.env.NEXT_PUBLIC_API);
  const data = await response.json();

  return {
    props: {
      items: data.drinks,
    },
  };
}
