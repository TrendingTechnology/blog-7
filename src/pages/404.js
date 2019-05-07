import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>Страница не найдена</h1>
    <p>
      К сожалению, страница не найдена. Если она точно должа быть, сообщите на
      почту{' '}
      <a href="mailto:batbondik0@gmail.com?subject=Ошибка в блоге">
        batbondik0@gmail.com
      </a>
    </p>
    <Link to="/">Вернуться в блог</Link>
  </Layout>
)

export default NotFoundPage
