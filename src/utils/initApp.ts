import { exists, writeTextFile } from './file'
import { DEFAULT_USER_CONFIG } from './user-config'

export default async function initApp() {
  if (!(await exists('config.json'))) {
    await writeTextFile({
      path: 'config.json',
      contents: JSON.stringify(DEFAULT_USER_CONFIG),
    })
    console.log('已写入默认配置文件')
  }
}
