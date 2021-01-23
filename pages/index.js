import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Culinary Calculator</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@300&display=swap" rel="stylesheet" /> 
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
      </Head>

      <header>
        <h2 class="text-center">Recipe Calculator</h2>
      </header>

      <main>
        <form action="" method="POST" class="container">
          <fieldset class="container">
            <div class="ingredient-menus">
            </div>
          </fieldset>

          <button type="submit" id="calculate">Calculate</button>
        </form>
      </main>

      <script type="text/javascript" src="/indexProcessing.js"></script>
    </div>
  )
}
