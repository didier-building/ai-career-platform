import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CVBuilder } from '../components/cv-builder/CVBuilder'
import { vi } from 'vitest'

// Mock the PDF generation to avoid canvas issues in tests
vi.mock('../components/cv-builder/utils/pdfGenerator', () => ({
  generatePDF: vi.fn().mockResolvedValue(undefined)
}))

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('CVBuilder', () => {
  test('renders template selection initially', () => {
    renderWithRouter(<CVBuilder />)
    
    expect(screen.getByText('Create Your Professional CV')).toBeInTheDocument()
    expect(screen.getByText('Modern Professional')).toBeInTheDocument()
    expect(screen.getByText('Classic Executive')).toBeInTheDocument()
    expect(screen.getByText('Creative Impact')).toBeInTheDocument()
  })

  test('progresses through steps correctly', async () => {
    renderWithRouter(<CVBuilder />)
    
    // Select a template
    const modernTemplate = screen.getByText('Modern Professional').closest('div')
    fireEvent.click(modernTemplate!)
    
    const useTemplateButton = screen.getByText('Use This Template')
    fireEvent.click(useTemplateButton)
    
    // Should now be in chat step
    await waitFor(() => {
      expect(screen.getByText('Let our AI assistant help you build your CV content.')).toBeInTheDocument()
    })
    
    // Should see the chat interface
    expect(screen.getByPlaceholderText('Type your response...')).toBeInTheDocument()
  })

  test('shows progress indicator', () => {
    renderWithRouter(<CVBuilder />)
    
    // Should show step 1 as active
    const step1 = screen.getByText('Template').closest('div')
    expect(step1).toHaveClass('text-blue-600')
    
    // Steps 2 and 3 should be inactive
    const step2 = screen.getByText('Content').closest('div')
    expect(step2).toHaveClass('text-gray-400')
    
    const step3 = screen.getByText('Preview').closest('div')
    expect(step3).toHaveClass('text-gray-400')
  })
})
