import ItemDetail from '../components/ItemDetail';
import Layout from '../components/Layout';
import { Data } from '../json/Id';
import { useSession, getSession, signIn } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

const Details = ({ details }) => {
  const { statu, session } = useSession();
  const [loading, setLoading] = useState(false);

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
    <Layout title={`Details for ${details?.map((item) => item.strDrink)}`}>
      <div className="details h-[85vh] w-[100%]  bg-[#ffffff]">
        {details?.map((details, index) => (
          <div key={index}>
            <ItemDetail details={details} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Details;

export async function getStaticPaths() {
  const response = await fetch(process.env.NEXT_PUBLIC_API);
  const data = await response.json();
  const paths = Data.map((item) => {
    return {
      params: {
        detailsId: `${item}`,
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
    `${process.env.NEXT_PUBLIC_API_ID}=${params.detailsId}`
  );
  const data = await response.json();

  return {
    props: {
      details: data.drinks,
    },
  };
}
