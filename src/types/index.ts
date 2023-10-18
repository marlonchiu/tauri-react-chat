export interface UserConfig {
  openAi: {
    key: string
    apiHost: string
    chatModel: string
  }
  /** 对话精确度 0~2 */
  temperature: number
  /** 最大上下文消息数量 */
  maxContextMessageCount: number
  /** 系统的人格 */
  systemPersonality: string
}
