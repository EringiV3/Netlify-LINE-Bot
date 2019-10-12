export default {
  "スタート": {
    type: 'text',
    text: '技術書店の締切まであと7日。だけど進捗は10%未満。あなたはどうする？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '限界まで頑張る',
            text: '[1] 限界まで頑張る'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '諦めて寝る',
            text: '[2] 諦めて寝る'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '現実逃避',
            text: '[3] 現実逃避'
          }
        }
      ]
    }
  },
  "1": {
    type: 'text',
    text: '頑張りすぎず寝るべし！'
  },
  "2": {
    type: 'text',
    text: '明日頑張ろう'
  },
  "3": {
    type: 'text',
    text: '何して現実逃避する？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '筋トレ',
            text: '[4] 筋トレ'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '虚無',
            text: '[5] 虚無'
          }
        }
      ]
    }
  },
  "4": {
    type: 'text',
    text: 'ジムへGo!'
  }
}