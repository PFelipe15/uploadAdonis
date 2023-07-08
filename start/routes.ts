import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

Route.post('posts', async ({ request }) => {
  const coverImage = request.file('perfil')

  if (coverImage) {
    console.log(coverImage.headers)
    await coverImage.move(Application.tmpPath('./uploads'))
  }
})
