import app from './app'
import { PORT, NODE_ENV } from './config/env'

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[lacancha] server running on http://localhost:${PORT} (${NODE_ENV})`)
})
