import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/NewProperty.module.css'

export default function NewProperty() {
  return (

      <form action="/api/newProperty" method="post" encType="multipart/form-data">
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1>Registrar novo imóvel</h1>
            <p>Todos os campos são necessários.</p>
            <hr/>

            <div className={styles.inputItem}>
              <select id="type" name="type">
                <option value="">Selecione o tipo de imóvel</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="terreno">Terreno</option>
              </select>
            </div>
            
            <div className={styles.inputItem}>
              <label for="bathrooms"><b>Banheiros</b></label>
              <input type="text" name="bathrooms" id="bathrooms" placeholder="Informe quantos banneiros tem o imóvel" required />
            </div>

            <div className={styles.inputItem}>
              <label for="bedrooms"><b>Quartos</b></label>
              <input type="text" name="bedrooms" id="bedrooms" placeholder="Informe quantos quartos tem o imóvel" required />
            </div>

            <div className={styles.inputItem}>
              <label for="garages"><b>Garagens</b></label>
              <input type="text" name="garages" id="garages" placeholder="Informe quantas garagens tem o imóvel" required /><br/>
            </div>

            <div className={styles.inputItem}>
              <label for="area"><b>Área do imóvel</b></label>
              <input type="text" name="area" id="area" placeholder="Informe a área do imóvel em metros quadrados" required /><br/>
            </div>

            <div className={styles.inputItem}>
              <label for="price"><b>Preço</b></label>
              <input type="text" name="price" id="price" placeholder="Informe o valor do imóvel" required /><br/>
            </div>

            <div className={styles.inputItem}>
              <label for="description"><b>Descrição</b></label>
              <input type="textarea" name="description" id="description" placeholder="Descrição detalhada do imóvel" required />
            </div>

            <div className={styles.inputItem}>
              <label for="image">Select files</label>
              <input type="file" id="image" name="images" multiple/>
            </div>

            <div className={styles.inputItem}>
              <button type="submit" className={styles.btn}>Cadastrar Imóvel</button>
            </div>

          </div>
        </div>
      </form>
  )
}
