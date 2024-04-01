import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({request}) => {

  const body = await request.json()
  const { values: {modelo, otros, ColorOption, autoridad, estilo, proModern, modernidad, perfil, login, blog, freebies, search, precios, url1, url2, blogOContenido, plataforma, funciones, productos, sexo} } = body

  const send = await resend.emails.send({
    from: 'booking@nanofighters.club',
    to: 'adrian.alvarezalonso1991@gmail.com',
    subject: 'New Client Form',
    html: 
    `
    <h2>Paginas web de referencias</h2>
    <p> Url no.1: ${url1} </p>
    <p> Url no.2: ${url2} </p>
    <br />
    <h2>Preguntas de Negocio:</h2>
    <p> Blog o Contenido: ${blogOContenido} </p>
    <p> Plataforma: ${plataforma} </p>
    <p> Funciones: ${funciones} </p>
    <p> Modelo de Pagos: ${modelo} </p>
    <br />
    <h2>Paginas Web:</h2>
    <p> Perfil: ${perfil === undefined ? 'N/A' : perfil} </p>
    <p> Login: ${login === undefined ? 'N/A' : perfil} </p>
    <p> Blog: ${blog === undefined ? 'N/A' : perfil} </p>
    <p> Freebies: ${freebies === undefined ? 'N/A' : perfil} </p>
    <p> Search: ${search === undefined ? 'N/A' : perfil} </p>
    <p> Blog Post: ${blog === undefined ? 'N/A' : perfil} </p>
    <p> Precios: ${precios === undefined ? 'N/A' : perfil} </p>
    <p>Productos: ${productos === undefined ? 'N/A' : perfil}</p>
    <p> Otros: ${otros === undefined ? 'N/A' : perfil} </p>
    <br />
    <h2>Estilos:</h2>
    <p> Color: ${ColorOption} </p>
    <p> Autoridad: ${autoridad} </p>
    <p> Estilo: ${estilo} </p>
    <p> Pro Modern: ${proModern} </p>
    <p> Modernidad: ${modernidad} </p>
    <p> Sexo: ${sexo} </p>
    `,
  })

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    )
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    )
  }
}