import type { NextPage } from 'next'

import Avatar from '../src/components/avatar'
import Head from '../src/components/head'
import Navbar from '../src/components/navbar'
import Footer from '../src/layouts/footer'
import Header from '../src/layouts/header'
import { Container, LeftBox, RightBox } from './styles'

const Home: NextPage = () => {
  return (
    <>
      <Head title="ArthurVBS | Home Page" />
      <Container>
        <LeftBox>
          <Header />
          <Avatar />
          <Navbar />
        </LeftBox>
        <RightBox>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque incidunt velit, recusandae aut blanditiis animi,
              molestiae delectus corporis rem magnam repellat voluptate eveniet
              tempora, voluptatum alias minus hic sapiente facere?
            </span>
            <span>
              Quidem, culpa iste porro fugiat rerum excepturi quibusdam
              architecto totam iusto quo dignissimos ab sint ipsum quisquam
              perferendis! Dolores, sunt necessitatibus recusandae iste earum
              nulla officia ex corrupti sed est!
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              mollitia reprehenderit temporibus natus saepe assumenda placeat
              aut, minima, quod libero quisquam, maxime officia dolores amet
              nobis similique suscipit neque eum!
            </span>
            <span>
              Eos, molestias ad aut dolorem deserunt ducimus vel sunt placeat
              cupiditate, quasi quia laudantium eaque sapiente autem a porro
              alias nesciunt. Fugit corporis incidunt enim aperiam dicta eius
              dolore nam?
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque incidunt velit, recusandae aut blanditiis animi,
              molestiae delectus corporis rem magnam repellat voluptate eveniet
              tempora, voluptatum alias minus hic sapiente facere?
            </span>
            <span>
              Quidem, culpa iste porro fugiat rerum excepturi quibusdam
              architecto totam iusto quo dignissimos ab sint ipsum quisquam
              perferendis! Dolores, sunt necessitatibus recusandae iste earum
              nulla officia ex corrupti sed est!
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              mollitia reprehenderit temporibus natus saepe assumenda placeat
              aut, minima, quod libero quisquam, maxime officia dolores amet
              nobis similique suscipit neque eum!
            </span>
            <span>
              Eos, molestias ad aut dolorem deserunt ducimus vel sunt placeat
              cupiditate, quasi quia laudantium eaque sapiente autem a porro
              alias nesciunt. Fugit corporis incidunt enim aperiam dicta eius
              dolore nam?
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque incidunt velit, recusandae aut blanditiis animi,
              molestiae delectus corporis rem magnam repellat voluptate eveniet
              tempora, voluptatum alias minus hic sapiente facere?
            </span>
            <span>
              Quidem, culpa iste porro fugiat rerum excepturi quibusdam
              architecto totam iusto quo dignissimos ab sint ipsum quisquam
              perferendis! Dolores, sunt necessitatibus recusandae iste earum
              nulla officia ex corrupti sed est!
            </span>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              mollitia reprehenderit temporibus natus saepe assumenda placeat
              aut, minima, quod libero quisquam, maxime officia dolores amet
              nobis similique suscipit neque eum!
            </span>
            <span>
              Eos, molestias ad aut dolorem deserunt ducimus vel sunt placeat
              cupiditate, quasi quia laudantium eaque sapiente autem a porro
              alias nesciunt. Fugit corporis incidunt enim aperiam dicta eius
              dolore nam?
            </span>
          </p>
          <Footer />
        </RightBox>
      </Container>
    </>
  )
}

export default Home
