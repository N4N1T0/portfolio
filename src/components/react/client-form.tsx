import { useState } from 'react'
import FormImage from '@/assets/eftakher-alam-i1VQZsU86ok-unsplash.webp'
import FormImage2 from '@/assets/ux-indonesia-qC2n6RQU4Vw-unsplash.webp'
import FormImage3 from '@/assets/balazs-ketyi-_x335IZXxfc-unsplash.webp'


const ClientForm = () => {
  const [sending, setSending] = useState(false)

  async function onSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    setSending(true)
    const values: { [key: string]: any } = {};

    formData.forEach((value, key) => {
      values[key] = value;
    });

    const res = await fetch('/api/sendEmail.json', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        values
      })
    })

    if (res.status === 200) {
      setSending(false)
      alert('Gracias por su coperacion. En breve nos prepararemos para crear su projecto')
      e.currentTarget.reset()
    }
  }

  return (
    <form
      className='max-w-2xl py-10 space-y-20 group opacity-0'
      onSubmit={(e) => onSubmit(e)}
      id='form'>
      <fieldset className='mt-10 group-disabled:opacity-50 space-y-5 md:space-y-12' disabled={sending} data-image={FormImage3.src}>
        <h3 className='text-xl font-medium text-gray-900 font-prata'>¿Cuál es la URL de 2 sitios web de referencia que le gustan?</h3>
        <input type="url" placeholder='Url no.1' className='w-full px-5 py-2 bg-transparent border-b border-gray-900 focus:outline-none focus:border-gray-500 placeholder:text-gray-700 space-y-4 group-disabled:opacity-50' required name='url1' />
        <input type="url" placeholder='Url no.2' className='w-full px-5 py-2 bg-transparent border-b border-gray-900 focus:outline-none focus:border-gray-500 placeholder:text-gray-700 space-y-4 group-disabled:opacity-50' name='url2' />
        <input type="text" placeholder='¿Sabe qué plataforma quiere utilizar para su sitio web?' className='w-full px-5 py-2 bg-transparent border-b border-gray-900 focus:outline-none focus:border-gray-500 placeholder:text-gray-700 space-y-4 group-disabled:opacity-50' required name='plataforma' />
        <input type="text" placeholder='¿Qué funciones desea incluir en el sitio web?' className='w-full px-5 py-2 bg-transparent border-b border-gray-900 focus:outline-none focus:border-gray-500 placeholder:text-gray-700 space-y-4 group-disabled:opacity-50' required name='funciones' />
        <select
          className='w-full px-5 py-2 bg-transparent border-b border-gray-900 focus:outline-none focus:border-gray-500 placeholder:text-gray-700 space-y-4 group-disabled:opacity-50'
          name='blogOContenido'
          disabled={sending}
          defaultValue='¿Necesita ayuda con los blogs y el marketing de contenidos?'
          required
        >
          <option
            disabled
            className='bg-gray-500 text-gray-100 px-5 py-2 hidden hover:bg-red-200'
          >¿Necesita ayuda con los blogs y el marketing de contenidos?</option>
          <option
            value='Precio individual por cada curso'
            className='bg-gray-800 text-gray-100 px-5 py-2 my-10'
          >Solo Blog</option>
          <option
            value='Precio individual por cada curso'
            className='bg-gray-800 text-gray-100 px-5 py-2 my-10'
          >Solo Marketing de Contenidos</option>
          <option
            value='Membresia (Pago recurrente)'
            className='bg-gray-800 text-gray-100 px-5 py-2'
          >Con los dos</option>
        </select>
        <select
          className='w-full px-5 py-2 bg-transparent border-b border-gray-900 focus:outline-none focus:border-gray-500 placeholder:text-gray-700 space-y-4 group-disabled:opacity-50'
          name='modelo'
          disabled={sending}
          defaultValue='Modelo de Pago a incoporar en la plataForma'
          required
        >
          <option
            disabled
            className='bg-gray-500 text-gray-100 px-5 py-2 hidden hover:bg-red-200'
          >Modelo de Pago a incoporar en la plataForma</option>
          <option
            value='Precio individual por cada curso'
            className='bg-gray-800 text-gray-100 px-5 py-2 my-10'
          >Precio individual por cada curso</option>
          <option
            value='Membresia (Pago recurrente)'
            className='bg-gray-800 text-gray-100 px-5 py-2'
          >Membresia (Pago recurrente)</option>
          <option value='Pago unico' className='bg-gray-800 text-gray-100 px-5 py-2'
          >Pago unico</option>
        </select>
      </fieldset>

      {/* Paginas */}
      <fieldset className='mt-10 group-disabled:opacity-50' disabled={sending} data-image={FormImage.src}>
        <legend className='text-3xl font-medium text-gray-900 font-prata mb-3'
        >Paginas a incorporar</legend>
        <p className='my-1 mb-3 text-pretty text-sm text-gray-700'>
          Las Paginas <strong>Homepage</strong>, <strong>404 (Pagina no Encontrada)</strong>, <strong> 500 (Error del Servidor) </strong> estan incluidad.
        </p>
        <legend className='sr-only'>Checkboxes</legend>
        <div className='divide-y divide-gray-800'>
          <label
            htmlFor='perfil'
            className='flex cursor-pointer items-start gap-4 py-4'>
            <div className='flex items-center'>
              &#8203;
              <input
                type='checkbox'
                className='size-4 rounded border-gray-300'
                id='perfil'
                value='ok'
                name='perfil'
              />
            </div>
            <div>
              <strong className='font-medium text-gray-900'>
                Perfil de Usuario
              </strong>
              <p className='mt-1 text-pretty text-sm text-gray-700'>
                En caso de membresia es una buena opcion
              </p>
            </div>
          </label>
          <label
            htmlFor='login'
            className='flex cursor-pointer items-start gap-4 py-4'>
            <div className='flex items-center'>
              &#8203;
              <input
                type='checkbox'
                className='size-4 rounded border-gray-300'
                id='login'
                value='ok'
                name='login'
              />
            </div>
            <div>
              <strong className='font-medium text-gray-900'>
                Login / Sign Up
              </strong>
              <p className='mt-1 text-pretty text-sm text-gray-700'>
                En caso de membresia es una buena opcion
              </p>
            </div>
          </label>
          <label
            htmlFor='blog'
            className='flex cursor-pointer items-start gap-4 py-4'>
            <div className='flex items-center'>
              &#8203;
              <input
                type='checkbox'
                className='size-4 rounded border-gray-300'
                id='blog'
                value='ok'
                name='blog'
              />
            </div>
            <div>
              <strong className='font-medium text-gray-900'>
                Blog / Blog Post
              </strong>
              <p className='mt-1 text-pretty text-sm text-gray-700'>
                Buena opcion para SEO
              </p>
            </div>
          </label>
          <label
            htmlFor='freebies'
            className='flex cursor-pointer items-start gap-4 py-4'>
            <div className='flex items-center'>
              &#8203;
              <input
                type='checkbox'
                className='size-4 rounded border-gray-300'
                id='freebies'
                value='ok'
                name='freebies'
              />
            </div>
            <div>
              <strong className='font-medium text-gray-900'> Freebies </strong>
              <p className='mt-1 text-pretty text-sm text-gray-700'>
                info productos o curso gratis, se usa principalmente como lead
                magnet
              </p>
            </div>
          </label>
          <label
            htmlFor='search'
            className='flex cursor-pointer items-start gap-4 py-4'>
            <div className='flex items-center'>
              &#8203;
              <input
                type='checkbox'
                className='size-4 rounded border-gray-300'
                id='search'
                value='ok'
                name='search'
              />
            </div>
            <div>
              <strong className='font-medium text-gray-900'>
                Pagina de Busqueda
              </strong>
              <p className='mt-1 text-pretty text-sm text-gray-700'>
                Buena opcion en caso de tener gran variedad de productos
              </p>
            </div>
          </label>
          <label
            htmlFor='precios'
            className='flex cursor-pointer items-start gap-4 py-4'>
            <div className='flex items-center'>
              &#8203;
              <input
                type='checkbox'
                className='size-4 rounded border-gray-300'
                id='precios'
                value='ok'
                name='precios'
              />
            </div>
            <div>
              <strong className='font-medium text-gray-900'> Precios </strong>
              <p className='mt-1 text-pretty text-sm text-gray-700'>
                En caso de tener Membresio o Pago unico
              </p>
            </div>
          </label>
          <label
            htmlFor='productos'
            className='flex cursor-pointer items-start gap-4 py-4'>
            <div className='flex items-center'>
              &#8203;
              <input
                type='checkbox'
                className='size-4 rounded border-gray-300'
                id='productos'
                value='ok'
                name='productos'
              />
            </div>
            <div>
              <strong className='font-medium text-gray-900'> Pagina de Productos </strong>
              <p className='mt-1 text-pretty text-sm text-gray-700'>
                En caso de tener un e-commerce o e-learning, una buena opcion
              </p>
            </div>
          </label>
        </div>
        <textarea
          name='otros'
          placeholder='Otras Paginas'
          className='w-full bg-transparent border-b border-gray-900 focus:outline-none focus:border-gray-500 placeholder:text-gray-700 my-5'
        ></textarea>
      </fieldset>

      {/* Estilo */}
      <fieldset disabled={sending} data-image={FormImage2.src} className='space-y-5 md:space-y-10'>
        <h3 className='text-2xl mb-10 font-prata'
        >¿Cómo imagina la imagen de su Plataforma?</h3>
        <div
          className='flex flex-wrap w-full justify-between items-center border-b border-gray-500 pb-5 group-disabled:opacity-50'>
          <div>
            <label
              htmlFor='gris'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='ColorOption'
                value='gris'
                id='gris'
                className='sr-only'
                defaultChecked
              />
              <p className='text-xs md:text-sm font-medium'>Gris</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Neutro'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='ColorOption'
                value='Neutro'
                id='Neutro'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Neutro</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Colorido'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='ColorOption'
                value='Colorido'
                id='Colorido'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Colorido</p>
            </label>
          </div>
        </div>
        <div
          className='flex flex-wrap w-full justify-between items-center border-b border-gray-500 py-5 group-disabled:opacity-50'>
          <div>
            <label
              htmlFor='Autoritario'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='autoridad'
                value='Autoritario'
                id='Autoritario'
                className='sr-only'
                defaultChecked
              />
              <p className='text-xs md:text-sm font-medium'>Autoritario</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Neutro1'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='autoridad'
                value='Neutro1'
                id='Neutro1'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Neutro</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Amistoso'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='autoridad'
                value='Amistoso'
                id='Amistoso'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Amistoso</p>
            </label>
          </div>
        </div>
        <div
          className='flex flex-wrap w-full justify-between items-center border-b border-gray-500 py-5 group-disabled:opacity-50'>
          <div>
            <label
              htmlFor='Minimalista'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='estilo'
                value='Minimalista'
                id='Minimalista'
                className='sr-only'
                defaultChecked
              />
              <p className='text-xs md:text-sm font-medium'>Minimalista</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Neutro2'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='estilo'
                value='Neutro2'
                id='Neutro2'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Neutro</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Complejo'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='estilo'
                value='Complejo'
                id='Complejo'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Complejo</p>
            </label>
          </div>
        </div>
        <div
          className='flex flex-wrap w-full justify-between items-center border-b border-gray-500 py-5 group-disabled:opacity-50'>
          <div>
            <label
              htmlFor='Profesional'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='proModern'
                value='Profesional'
                id='Profesional'
                className='sr-only'
                defaultChecked
              />
              <p className='text-xs md:text-sm font-medium'>Profesional</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Neutro3'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='proModern'
                value='Neutro3'
                id='Neutro3'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Neutro</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Casual'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='proModern'
                value='Casual'
                id='Casual'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Casual</p>
            </label>
          </div>
        </div>
        <div
          className='flex flex-wrap w-full justify-between items-center
          border-b border-gray-500 py-5 group-disabled:opacity-50'>
          <div>
            <label
              htmlFor='Clasico'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='modernidad'
                value='Clasico'
                id='Clasico'
                className='sr-only'
                defaultChecked
              />
              <p className='text-xs md:text-sm font-medium'>Clasico</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Neutro4'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='modernidad'
                value='Neutro4'
                id='Neutro4'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Neutro</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Moderno'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='modernidad'
                value='Moderno'
                id='Moderno'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Moderno</p>
            </label>
          </div>
        </div>
        <div
          className='flex flex-wrap w-full justify-between items-center
          border-b border-gray-500 py-5 group-disabled:opacity-50'>
          <div>
            <label
              htmlFor='Masculino'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='sexo'
                value='Masculino'
                id='Masculino'
                className='sr-only'
                defaultChecked
              />
              <p className='text-xs md:text-sm font-medium'>Masculino</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Neutro5'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='sexo'
                value='Neutro5'
                id='Neutro5'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Neutro</p>
            </label>
          </div>
          <div>
            <label
              htmlFor='Femenino'
              className='flex cursor-pointer items-center justify-center border border-gray-900 px-3 md:px-5 py-1 md:py-2 text-gray-900 hover:text-gray-700 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-900 has-[:checked]:text-white'>
              <input
                type='radio'
                name='sexo'
                value='Femenino'
                id='Femenino'
                className='sr-only'
              />
              <p className='text-xs md:text-sm font-medium'>Femenino</p>
            </label>
          </div>
        </div>
      </fieldset>
      <button
        type='submit'
        disabled={sending}
        id='submit'
        className='px-6 py-2 bg-gray-900 text-white hover:bg-gray-700 duration-200 transition-colors group-disabled:opacity-50'
      >Enviar Formulario</button>
    </form>
  )
}

export default ClientForm