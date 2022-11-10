import { useSession, getSession, signIn } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

function About() {
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
    <Layout title="About Us">
      <div className="min-h-[85vh]">
        <h1 className="text-[40px] py-[50px] px-[30px] border-b-[2px]">
          About Us
        </h1>
        <p className="text-[19px] my-[20px] px-[30px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          voluptate fuga quae similique eius quis modi cumque dolore debitis,
          iste veniam a provident, perspiciatis incidunt amet in suscipit
          quibusdam? Similique, accusamus voluptatibus minus ullam modi libero!
          Dolores enim ullam praesentium voluptates dolorum voluptatibus
          delectus quia, explicabo sequi exercitationem vitae nihil, architecto
          autem natus. Odio itaque sunt quaerat totam recusandae, laboriosam
          iure consequuntur ipsum aliquid harum quisquam perspiciatis sint!
          Facilis debitis est nesciunt mollitia officiis a tempora explicabo
          quod dolorum aspernatur blanditiis minima, ipsam perspiciatis.
          Praesentium illum ipsam, delectus, aspernatur ad iure ducimus in atque
          nobis, consequuntur perspiciatis. Impedit vitae repellat consectetur
          omnis similique officiis? Asperiores excepturi non quod optio vero
          quibusdam omnis reprehenderit, magnam, voluptatem pariatur distinctio.
          Sint porro nobis ad voluptas amet pariatur, quidem veritatis. Nostrum,
          ab explicabo corrupti dicta saepe iure recusandae expedita hic
          obcaecati in amet perferendis excepturi aspernatur. Nulla excepturi
          delectus molestiae a dolore, ratione mollitia voluptatum in
          consequuntur dicta. Corrupti praesentium voluptas voluptatibus
          repellendus reiciendis fuga quasi tempore! Enim nemo asperiores
          deleniti magni labore veritatis natus. Tempora autem ipsum eveniet
          incidunt unde beatae, quasi, nemo facilis ipsa amet obcaecati iusto
          quo pariatur deleniti explicabo rem at minima? Similique dolore libero
          aliquid, qui, quaerat, sunt inventore dolorum repellendus culpa illo
          alias vitae id dolor. Ad ut iusto ea sunt id, quibusdam nam odio
          debitis quam, magnam neque, impedit inventore molestiae delectus modi
          veniam quidem aut. Ipsum corporis labore fugit maiores nam doloribus
          culpa animi! Ratione quaerat, odio adipisci aspernatur praesentium
          saepe expedita necessitatibus et eius maxime autem reprehenderit
          assumenda vero ullam fugit dolorum quis ipsum suscipit ex? Adipisci
          enim praesentium fugiat accusantium tempore soluta iure voluptates ex
          beatae hic! Autem, excepturi beatae natus soluta in veniam corporis
          voluptate culpa aspernatur, cumque alias? Corrupti, dolorem temporibus
          voluptatem esse molestias dolor sequi. Sequi qui unde minima!
          Voluptatem in similique sit, sapiente quia consequatur deleniti? Id
          repellendus nulla aspernatur dicta? Quia quo temporibus veniam
          aspernatur quisquam sint accusamus tenetur. Placeat, ullam possimus!
          Soluta ratione sed alias explicabo distinctio adipisci voluptatem.
          Accusantium ipsum adipisci ab incidunt suscipit ea corrupti deserunt
          inventore nihil quibusdam rem quia laudantium nisi mollitia dolores
          excepturi porro, provident consequatur odit blanditiis assumenda ullam
          autem architecto? Alias ex cumque hic eum! Aperiam eligendi odit
          ratione! Minima ducimus officiis ipsa. Expedita facere quas
          necessitatibus dolore harum velit nihil, sapiente corrupti, libero
          quidem maiores cupiditate molestiae natus earum laboriosam sed ex nemo
          exercitationem blanditiis officia quod. Molestias, sunt voluptates.
        </p>
      </div>
    </Layout>
  );
}

export default About;
