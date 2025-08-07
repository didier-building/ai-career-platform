import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import type { CVData } from '../CVBuilder';

export async function generatePDF(
  templateId: string,
  data: CVData,
  previewElementId: string
): Promise<void> {
  try {
    const element = document.getElementById(previewElementId);
    if (!element) throw new Error('Preview element not found');

    // Show loading state
    const originalContent = element.innerHTML;

    // Temporarily adjust styles for better PDF rendering
    const originalStyle = element.style.cssText;
    element.style.cssText = `
      ${originalStyle}
      background: white !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      margin: 0 !important;
      padding: 20px !important;
      width: 794px !important;
      min-height: auto !important;
    `;

    // Wait a moment for styles to apply
    await new Promise(resolve => setTimeout(resolve, 100));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794, // A4 width in pixels at 96 DPI
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    // Restore original styles
    element.style.cssText = originalStyle;

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png', 1.0);

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Add metadata
    pdf.setProperties({
      title: `${data.personalInfo?.name || 'Professional'} CV`,
      subject: 'Curriculum Vitae',
      creator: 'AI Career Companion',
      author: data.personalInfo?.name || 'Professional',
      keywords: `CV, Resume, ${templateId}, ${data.personalInfo?.name || ''}`,
    });

    // Generate filename
    const fileName = `${(data.personalInfo?.name || 'cv')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')}_cv.pdf`;

    // Save the PDF
    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
