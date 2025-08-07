import { CVChatService } from '../components/cv-builder/utils/chatService'

describe('CVChatService', () => {
  let chatService: InstanceType<typeof CVChatService>

  beforeEach(() => {
    chatService = new CVChatService()
  })

  test('starts with personal information collection', async () => {
    const response = await chatService.processMessage('John Doe')
    
    expect(response.role).toBe('assistant')
    expect(response.content).toContain('email')
  })

  test('validates email format', async () => {
    // First, provide name
    await chatService.processMessage('John Doe')
    
    // Then provide invalid email
    const response = await chatService.processMessage('invalid-email')
    expect(response.content).toContain('valid email address')
    
    // Then provide valid email
    const validResponse = await chatService.processMessage('john@example.com')
    expect(validResponse.content).toContain('phone')
  })

  test('collects complete personal information', async () => {
    await chatService.processMessage('John Doe')
    await chatService.processMessage('john@example.com')
    await chatService.processMessage('+1234567890')
    const response = await chatService.processMessage('New York, USA')
    
    expect(response.content).toContain('work experience')
    
    const data = chatService.getData()
    expect(data.personalInfo?.name).toBe('John Doe')
    expect(data.personalInfo?.email).toBe('john@example.com')
    expect(data.personalInfo?.phone).toBe('+1234567890')
    expect(data.personalInfo?.location).toBe('New York, USA')
  })

  test('processes experience information', async () => {
    // Complete personal info first
    await chatService.processMessage('John Doe')
    await chatService.processMessage('john@example.com')
    await chatService.processMessage('+1234567890')
    await chatService.processMessage('New York, USA')
    
    // Now add experience
    await chatService.processMessage('Software Engineer')
    await chatService.processMessage('Tech Corp')
    await chatService.processMessage('2022 - Present')
    await chatService.processMessage('Developed web applications using React and Node.js')
    const response = await chatService.processMessage('no')
    
    expect(response.content).toContain('educational background')
    
    const data = chatService.getData()
    expect(data.experience).toHaveLength(1)
    expect(data.experience?.[0].title).toBe('Software Engineer')
    expect(data.experience?.[0].company).toBe('Tech Corp')
  })

  test('processes skills as comma-separated list', async () => {
    // Complete all previous sections
    await chatService.processMessage('John Doe')
    await chatService.processMessage('john@example.com')
    await chatService.processMessage('+1234567890')
    await chatService.processMessage('New York, USA')
    
    await chatService.processMessage('Software Engineer')
    await chatService.processMessage('Tech Corp')
    await chatService.processMessage('2022 - Present')
    await chatService.processMessage('Developed web applications')
    await chatService.processMessage('no')
    
    await chatService.processMessage('Computer Science')
    await chatService.processMessage('University of Tech')
    await chatService.processMessage('2018 - 2022')
    await chatService.processMessage('no')
    
    const response = await chatService.processMessage('JavaScript, React, Node.js, Python')
    
    expect(response.content).toContain('preview')
    
    const data = chatService.getData()
    expect(data.skills).toEqual(['JavaScript', 'React', 'Node.js', 'Python'])
  })
})
