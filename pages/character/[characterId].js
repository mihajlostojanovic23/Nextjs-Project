import { useRouter } from 'next/router';
import React from 'react';
import { useSession, getSession, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

//Data
import { Data } from '../../json/Data';

//Components
import Item from '../../components/Item';
import BrowseByName from '../../components/BrowseByName';
import Layout from '../../components/Layout';

function Character({ data }) {
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

  const router = useRouter();
  const query = router.query;
  return (
    <Layout title={`Character ${query.characterId}`}>
      <div className="flex flex-wrap justify-center">
        {data &&
          data.map((item, index) => (
            <div key={index} className="mx-[20px]">
              <Item data={item} />
            </div>
          ))}
      </div>
      <BrowseByName />
    </Layout>
  );
}

export default Character;

export async function getStaticPaths() {
  const paths = Data.map((item) => {
    return {
      params: {
        characterId: `${item}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BY_FIRST_LETTER}=${params.characterId}`
  );

  const data = await response.json();

  return {
    props: {
      data: data.drinks,
    },
  };
}
